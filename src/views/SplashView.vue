<template>
    <div class="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-color">
        <div class="absolute top-0 left-0 w-[300%] h-full z-0 opacity-10 wave-scale-1-1">
            <svg ref="wave1" class="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path :fill="primaryColor" :fill-opacity="1"
                    d="M0,160L40,165.3C80,171,160,181,240,192C320,203,400,213,480,192C560,171,640,117,720,96C800,75,880,85,960,106.7C1040,128,1120,160,1200,176C1280,192,1360,192,1400,192L1440,192L1440,0L0,0Z" />
            </svg>
        </div>

        <div class="absolute top-0 left-0 w-[300%] h-full z-0 opacity-10 wave-scale-0-9">
            <svg ref="wave2" class="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path :fill="secondaryColor" :fill-opacity="0.8"
                    d="M0,160L40,149.3C80,139,160,117,240,133.3C320,149,400,203,480,197.3C560,192,640,128,720,128C800,128,880,192,960,197.3C1040,203,1120,149,1200,138.7C1280,128,1360,160,1440,192L1440,0L0,0Z" />
            </svg>
        </div>

        <div ref="logo" class="relative z-10 text-center px-4 sm:px-8 md:px-12">
            <h1 class="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                <span ref="letters" class="flex gap-1 justify-center">
                    <template v-for="(segment, index) in titleSegments" :key="index">
                        <span v-for="(char, i) in segment.text" :key="i" :class="segment.class">
                            {{ char }}
                        </span>
                    </template>
                </span>
            </h1>

            <p ref="subtitle" class="text-md sm:text-xl md:text-2xl text-muted font-light max-w-lg mx-auto opacity-0">
                Where functionality meets sleek design.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { gsap } from 'gsap'

const wave1 = ref(null)
const wave2 = ref(null)
const letters = ref(null)
const subtitle = ref(null)

const titleSegments = [
    { text: 'Code', class: 'text-primary' },
    { text: '·', class: 'mx-1' },
    { text: 'Design', class: 'text-secondary' },
    { text: '·', class: 'mx-1' },
    { text: 'Impact', class: 'text-primary' },
]

const primaryColor = computed(() =>
    getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim()
)
const secondaryColor = computed(() =>
    getComputedStyle(document.documentElement).getPropertyValue('--color-secondary').trim()
)

onMounted(() => {
    const animateWave = (el, { x, y, rotate, dx, dy, dr }) => {
        gsap.to(el, { x, duration: dx, repeat: -1, ease: 'linear' })
        gsap.to(el, { y, duration: dy, repeat: -1, yoyo: true, ease: 'sine.inOut' })
        gsap.to(el, { rotate, duration: dr, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    }

    animateWave(wave1.value, { x: '-40%', y: 10, rotate: 2, dx: 10, dy: 6, dr: 5 })
    animateWave(wave2.value, { x: '-24%', y: 6, rotate: 1, dx: 12, dy: 7, dr: 6 })

    const spans = letters.value.querySelectorAll('span')
    gsap.fromTo(
        spans,
        { y: 60, opacity: 0, scale: 0.8 },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.05,
            duration: 1.2,
            ease: 'back.out(1.7)',
        }
    )

    gsap.to(subtitle.value, {
        delay: 2,
        opacity: 1,
        y: -5,
        duration: 1,
        ease: 'power2.out',
    })
})
</script>

<style scoped>
.wave-scale-1-1 {
    transform: scaleY(1.1);
    transform-origin: top;
}

.wave-scale-0-9 {
    transform: scaleY(0.9);
    transform-origin: top;
}
</style>