<template>
    <section ref="heroSection"
        class="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 px-3 space-x-2 overflow-hidden">

        <div ref="leftSection" class="w-full max-w-3xl space-y-4 text-left">
            <h1 class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                <span>{{ staticStart }}</span>
                <span ref="typingTarget"
                    class="text-accent bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400"></span>
                <span>{{ staticEnd }}</span>
            </h1>

            <p class="text-base md:text-lg text-muted leading-relaxed">
                I’m a Full Stack Developer who loves to <span class="text-primary font-semibold">build</span>, <span
                    class="text-secondary font-semibold">learn</span>, and <span
                    class="text-highlight font-semibold">grow</span> through challenges.
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

        <!-- Right Section -->
        <div ref="rightSection" class="w-full max-w-md mt-16 lg:mt-0 mx-auto">
            <img src="@/assets/programming.png" alt="Hero Illustration"
                class="w-full object-contain drop-shadow-[0_0_15px_rgba(167,139,250,0.3)]" />
        </div>
    </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { RouterLink } from 'vue-router'
import Typed from 'typed.js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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

    // GSAP Animations
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

    ScrollTrigger.refresh()
})

onUnmounted(() => {
    typedInstance.destroy()
})
</script>