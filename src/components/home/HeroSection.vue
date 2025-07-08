<template>
    <section ref="heroSection"
        class="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-20 pb-10 px-3 space-x-2 overflow-hidden">

        <div ref="leftSection" class="w-full max-w-3xl space-y-4 text-left">
            <h1 class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                <span>{{ staticStart }}</span>
                <span ref="typingTarget"
                    class="text-accent bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400"></span>
                <span>{{ staticEnd }}</span>
            </h1>

            <p class="text-base md:text-lg text-white leading-relaxed">
                Hi, I’m Mario who loves to <span class="text-purple-400 font-semibold">build</span>, <span
                    class="text-indigo-400 font-semibold">learn</span>, and <span
                    class="text-cyan-400 font-semibold">grow</span> through challenges.
            </p>

            <div class="flex flex-wrap justify-start gap-4 pt-6">
                <RouterLink to="/projects"
                    class="relative inline-block px-6 py-3 rounded-2xl font-semibold bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-400 shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-105 overflow-hidden group">
                    <span class="relative z-10">View Projects</span>
                    <span
                        class="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition duration-300"></span>
                    <span
                        class="absolute left-0 top-0 w-full h-full transform scale-0 group-hover:scale-150 bg-white opacity-5 rounded-full transition-all duration-700 ease-out"></span>
                </RouterLink>

                <RouterLink to="/contact"
                    class="relative inline-block px-6 py-3 rounded-2xl font-semibold border border-white text-white hover:text-purple-300 hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group">
                    <span class="relative z-10">Let's Talk</span>
                    <span
                        class="absolute inset-0 bg-white opacity-5 group-hover:opacity-10 transition duration-300"></span>
                    <span
                        class="absolute right-0 bottom-0 w-full h-full transform scale-0 group-hover:scale-150 bg-purple-500 opacity-10 rounded-full transition-all duration-700 ease-out"></span>
                </RouterLink>
            </div>
        </div>

        <!-- Right Section - Abstract Digital Illustration with Lucide Icons -->
        <div ref="rightSection"
            class="w-full max-w-md mt-16 lg:mt-0 mx-auto relative flex items-center justify-center p-4">
            <svg class="w-full h-auto object-contain" viewBox="0 0 200 200" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <!-- Background grid/pattern -->
                <rect x="0" y="0" width="200" height="200" fill="transparent" />

                <!-- Gradients for icons and circles -->
                <defs>
                    <linearGradient id="gradient-hero-icon-purple" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#a78bfa" />
                        <stop offset="100%" stop-color="#c084fc" />
                    </linearGradient>
                    <linearGradient id="gradient-hero-icon-indigo" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#818cf8" />
                        <stop offset="100%" stop-color="#6366f1" />
                    </linearGradient>
                    <linearGradient id="gradient-hero-circle" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#a78bfa" />
                        <stop offset="50%" stop-color="#6366f1" />
                        <stop offset="100%" stop-color="#22d3ee" />
                    </linearGradient>
                </defs>

                <!-- Lucide Icons as SVG Paths -->
                <!-- Code icon -->
                <g class="hero-icon-anim" data-delay="0.2">
                    <Code :size="40" stroke="url(#gradient-hero-icon-purple)" :x="30" :y="30" />
                </g>
                <!-- Network icon -->
                <g class="hero-icon-anim" data-delay="0.4">
                    <Network :size="40" stroke="url(#gradient-hero-icon-indigo)" :x="130" :y="50" />
                </g>
                <!-- SquareTerminal icon -->
                <g class="hero-icon-anim" data-delay="0.6">
                    <SquareTerminal :size="40" stroke="url(#gradient-hero-icon-purple)" :x="60" :y="120" />
                </g>
                <!-- LineChart icon -->
                <g class="hero-icon-anim" data-delay="0.8">
                    <LineChart :size="40" stroke="url(#gradient-hero-icon-indigo)" :x="110" :y="140" />
                </g>
                <!-- Sparkles icon -->
                <g class="hero-icon-anim" data-delay="1.0">
                    <Sparkles :size="30" stroke="url(#gradient-hero-icon-purple)" :x="90" :y="70" />
                </g>
            </svg>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { RouterLink } from 'vue-router'
import Typed from 'typed.js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Import Lucide icons
import { Code, Network, SquareTerminal, LineChart, Sparkles } from 'lucide-vue-next';

gsap.registerPlugin(ScrollTrigger)

const staticStart = 'Designing dynamic '
const staticEnd = ' to elevate user experiences.'
const typingTarget = ref(null)
let typedInstance

const heroSection = ref(null)
const leftSection = ref(null)
const rightSection = ref(null)

onMounted(async () => {
    // Typing effect
    typedInstance = new Typed(typingTarget.value, {
        strings: ['solutions', 'applications', 'interfaces', 'platforms', 'services', 'tools'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: false
    })

    await nextTick()

    // GSAP Animations for sections
    gsap.from(leftSection.value, {
        opacity: 0,
        x: -80,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: heroSection.value,
            start: 'top 80%'
        }
    })

    gsap.from(rightSection.value, {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: heroSection.value,
            start: 'top 80%'
        }
    })

    // GSAP Animation for Hero SVG elements
    gsap.fromTo('.hero-icon-anim',
        { opacity: 0, scale: 0.5, transformOrigin: 'center center' },
        {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'back.out(1.7)',
            stagger: (index, target) => parseFloat(target.dataset.delay), // Use data-delay for stagger
            scrollTrigger: {
                trigger: heroSection.value,
                start: 'top 70%',
                toggleActions: 'play none none none',
            }
        }
    );

    gsap.fromTo('.hero-circle-anim',
        { drawSVG: '0%' },
        {
            drawSVG: '100%',
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: heroSection.value,
                start: 'top 70%',
                toggleActions: 'play none none none',
            }
        }
    );


    ScrollTrigger.refresh()
})

onUnmounted(() => {
    typedInstance.destroy()
})
</script>