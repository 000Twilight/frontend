<template>
    <div ref="chartContainer" class="relative w-full h-[360px]">
        <Bar v-if="showChart" :data="chartData" :options="chartOptions" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Bar } from 'vue-chartjs'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels)
gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
    labels: Array,
    data: Array, // Expect values: 0 - 100 (e.g., 20 = Beginner, 40 = Intermediate...)
})

const chartContainer = ref(null)
const showChart = ref(false)

// Colors matching your theme
function getCSSColor(varName) {
    const color = getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim()
    return color
}

function brighten(hex, percent = 1.2) {
    const rgb = hex.replace('#', '').match(/.{1,2}/g).map(c => Math.min(255, Math.floor(parseInt(c, 16) * percent)))
    return `rgba(${rgb.join(', ')}, 1)`
}

const barColors = [
    brighten(getCSSColor('--color-primary')),
    brighten(getCSSColor('--color-secondary')),
    brighten(getCSSColor('--color-highlight')),
    brighten(getCSSColor('--color-success')),
    brighten(getCSSColor('--color-warning')),
]

function getGradient(index) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 300)
    gradient.addColorStop(0, barColors[index])
    gradient.addColorStop(1, 'rgba(30, 30, 30, 0.4)') 
    return gradient
}

// Chart data with per-bar gradient
const chartData = {
    labels: props.labels,
    datasets: [
        {
            label: 'Skill Level',
            data: props.data,
            backgroundColor: props.data.map((_, i) => getGradient(i)),
            borderRadius: 10,
            barThickness: 100,
        },
    ],
}

// Custom Y-axis labels instead of percentage
const skillLevels = ['Beginner', 'Intermediate', 'Proficient', 'Advanced', 'Expert']

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        duration: 1500,
        easing: 'easeOutCubic',
    },
    plugins: {
        legend: { display: false },
        datalabels: {
            anchor: 'end',
            align: 'start',
            offset: -10,
            color: '#E5E7EB',
            font: { weight: 'bold' },
            formatter: value => `${value}%`,
        },
        tooltip: {
            callbacks: {
                label: ctx => `${ctx.parsed.y}%`,
            },
        },
    },
    indexAxis: 'x',
    scales: {
        x: {
            ticks: { color: '#9CA3AF' },
            grid: { color: 'rgba(255,255,255,0.05)' },
        },
        y: {
            min: 0,
            max: 100,
            ticks: {
                stepSize: 25,
                color: '#9CA3AF',
                callback: function (value) {
                    const idx = value / 25
                    return skillLevels[idx] || ''
                },
            },
            grid: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.05)',
            },
        },
    },
}

onMounted(() => {
    ScrollTrigger.create({
        trigger: chartContainer.value,
        start: 'top 85%',
        once: true,
        onEnter: () => {
            showChart.value = true
        },
    })
})
</script>