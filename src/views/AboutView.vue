<template>
    <section ref="aboutSection" class="pt-24 pb-12 px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
        <h1 ref="heading" class="text-4xl md:text-5xl font-extrabold text-center mb-16 text-primary">
            About Me
        </h1>

        <div class="grid lg:grid-cols-2 gap-16 items-center text-muted">
            <div class="space-y-6 text-base md:text-lg leading-relaxed max-w-prose mx-auto lg:mx-0">
                <p ref="para1">
                    Hello! I'm <strong class="text-primary">Mario Richie Lim</strong>, a
                    6th-semester Informatics student at
                    <strong class="text-secondary">Universitas Multimedia Nusantara</strong>.
                    I’m passionate about building purposeful digital experiences.
                </p>
                <p ref="para2">
                    I design and develop
                    <span class="text-primary font-semibold">scalable web & mobile applications</span>
                    with a sharp eye for detail and design harmony.
                </p>
                <p ref="para3">
                    Whether it’s an
                    <span class="text-highlight font-semibold">e-learning platform</span>
                    or an internal company tool, I focus on clean code, great UX, and long-term value.
                </p>
            </div>

            <div ref="tiltWrapper" class="flex justify-center lg:justify-end">
                <img src="/src/assets/profile.png" alt="Mario Richie Lim Illustration" v-tilt="{ max: 15, speed: 200 }"
                    class="w-64 sm:w-72 h-auto object-contain rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition duration-700" />
            </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 text-center">
            <div v-for="(stat, index) in stats" :key="index" class="space-y-1">
                <p :ref="el => statRefs[index] = el" class="text-3xl md:text-4xl font-bold text-primary">0</p>
                <p class="text-muted text-sm font-medium">{{ stat.label }}</p>
            </div>
        </div>

        <div class="mt-20">
            <h2 class="text-2xl font-bold text-primary mb-4">Tech Skills</h2>
            <SkillChart :labels="skillLabels" :data="skillValues" />
        </div>

        <div ref="factsSection" class="mt-24 text-center space-y-10 relative h-[300px]">
            <h2 class="text-2xl font-bold text-primary mb-4">Fun Facts</h2>
            <div class="relative w-full h-full">
                <div v-for="(star, index) in starPositions" :key="index"
                    class="absolute group transition-transform duration-300 hover:scale-125" :style="{
                        top: star.y + '%',
                        left: star.x + '%',
                        color: star.color,
                        transform: 'translate(-50%, -50%)',
                    }" @mouseenter="activeFact = index" @mouseleave="activeFact = null"
                    :ref="el => starRefs[index] = el">
                    <Star class="w-8 h-8 md:w-10 md:h-10 drop-shadow-md" />
                    <transition name="fade-slide">
                        <span v-if="activeFact === index"
                            class="absolute px-3 py-1 rounded-md text-normal text-sm font-medium mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap z-10"
                            :style="{
                                backgroundColor: star.color + '33',
                            }">
                            {{ facts[index] }}
                        </span>
                    </transition>
                </div>
            </div>
        </div>

        <!-- Language Bars -->
        <div ref="languageSection" class="mt-24 space-y-6">
            <h2 class="text-2xl font-bold text-primary mb-6">Language Proficiency</h2>
            <div v-for="lang in languages" :key="lang.name" class="space-y-2">
                <div class="flex justify-between text-sm font-medium text-muted">
                    <span>{{ lang.name }}</span>
                    <span>{{ lang.level }}%</span>
                </div>
                <div class="w-full h-4 bg-[#1F2937] rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-1000 ease-in-out" :style="{
                        width: showBars ? lang.level + '%' : '0%',
                        background: getGradient(lang.color),
                    }"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { storeToRefs } from 'pinia'
import { useAboutStore } from '@/stores/aboutStore'
import SkillChart from '@/components/about/SkillChart.vue'
import { Star } from 'lucide-vue-next'

const route = useRoute()

gsap.registerPlugin(ScrollTrigger)

const aboutSection = ref(null)
const heading = ref(null)
const para1 = ref(null)
const para2 = ref(null)
const para3 = ref(null)
const tiltWrapper = ref(null)
const factsSection = ref(null)
const languageSection = ref(null)

const statRefs = ref([])
const showBars = ref(false)

const aboutStore = useAboutStore()
const { stats } = storeToRefs(aboutStore)

const skillLabels = ['Frontend', 'Backend', 'UI/UX', 'Badminton', 'Reading']
const skillValues = [80, 80, 60, 75, 70]

// Fun Facts
const facts = [
    'I love badminton.',
    'Always learning something new.',
    'Endlessly curious.',
    'Gamer at heart.',
    'Bit of a perfectionist.',
    'I enjoy fantasy books.',
    'I can fly (in dreams).',
]
const colors = ['#A78BFA', '#C084FC', '#D8B4FE', '#6EE7B7', '#FBBF24', '#F472B6', '#38BDF8']
const generateStarPositions = () => {
    const positions = []
    while (positions.length < facts.length) {
        const x = Math.random() * 80 + 10
        const y = Math.random() * 70 + 15
        const color = colors[Math.floor(Math.random() * colors.length)]
        const tooClose = positions.some(p => Math.hypot(p.x - x, p.y - y) < 15)
        if (!tooClose) positions.push({ x, y, color })
    }
    return positions
}
const starPositions = ref(generateStarPositions())
const activeFact = ref(null)
const starRefs = ref([])

const languages = [
    { name: 'English', level: 90, color: '--color-secondary' },
    { name: 'Indonesian', level: 85, color: '--color-highlight' },
]
const getGradient = (colorVar) => {
    const color = getComputedStyle(document.documentElement).getPropertyValue(colorVar).trim()
    return `linear-gradient(to right, ${color}, ${color}B3)`
}

const runAnimations = () => {
    gsap.from(heading.value, {
        opacity: 0,
        y: -40,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: heading.value, start: 'top 85%' },
    })

    gsap.from([para1.value, para2.value, para3.value], {
        opacity: 0,
        y: 30,
        stagger: 0.25,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: aboutSection.value, start: 'top 90%' },
    })

    statRefs.value.forEach((el, i) => {
        let obj = { val: 0 }
        gsap.to(obj, {
            val: stats.value[i].value,
            duration: 2,
            ease: 'power1.out',
            scrollTrigger: { trigger: el, start: 'top 90%' },
            onUpdate: () => {
                el.innerText = Math.floor(obj.val)
            },
        })
    })

    ScrollTrigger.create({
        trigger: languageSection.value,
        start: 'top 90%',
        once: true,
        onEnter: () => (showBars.value = true),
    })

    starRefs.value.forEach((el, i) => {
        gsap.fromTo(
            el,
            { opacity: 0, scale: 0.5, y: 20 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1,
                delay: i * 0.15,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: factsSection.value,
                    start: 'top 90%',
                },
            }
        )

        gsap.to(el, {
            scale: 1.05,
            duration: 1.5,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: i * 0.2,
        })
    })
}
onMounted(() => {
    runAnimations();
})

watch(() => route.path, () => {
    nextTick(() => {
        runAnimations();
    })
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(8px);
}

@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.animate-spin-slow {
    animation: spin-slow 4s linear infinite;
}
</style>