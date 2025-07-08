<template>
    <section ref="aboutSection" class="pt-24 pb-12 px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
        <h1 ref="heading"
            class="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-500 via-indigo-600 to-cyan-400 bg-clip-text text-transparent">
            About Me
        </h1>

        <div class="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            <!-- Left Section - Enhanced Text Content -->
            <div class="space-y-4 text-base md:text-lg leading-relaxed max-w-prose mx-auto lg:mx-0">
                <div ref="para1" class="group">
                    <p class="text-gray-100 transition-all duration-300 group-hover:text-white">
                        Hello! I'm
                        <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 
                                   hover:from-purple-300 hover:to-pink-300 transition-all duration-300 cursor-default">
                            Mario Richie Lim
                        </span>, currently a
                        <span
                            class="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300 cursor-default">
                            Computer Science student
                        </span> at
                        <span
                            class="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300 cursor-default">
                            Universitas Multimedia Nusantara
                        </span>. I'm passionate about building purposeful digital experiences.
                    </p>
                </div>

                <div ref="para2" class="group">
                    <p class="text-gray-100 transition-all duration-300 group-hover:text-white relative">
                        I design and develop
                        <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 
                                   hover:from-purple-300 hover:to-cyan-300 transition-all duration-300 cursor-default">
                            scalable web & mobile applications
                        </span>
                        with a sharp eye for detail and design harmony.
                    </p>
                </div>

                <div ref="para3" class="group">
                    <p class="text-gray-100 transition-all duration-300 group-hover:text-white relative">
                        Whether it's an
                        <span class="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300 cursor-default 
                                   relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                                   after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                            e-learning platform
                        </span>
                        or an internal company tool, I focus on clean code, great UX, and long-term value.
                    </p>
                </div>

                <!-- Call-to-action badges -->
                <div class="flex flex-wrap gap-3 pt-4">
                    <span
                        class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium 
                               bg-purple-500/20 text-purple-300 border border-purple-500/30 
                               hover:bg-purple-500/30 hover:border-purple-400/50 transition-all duration-300 cursor-default">
                        <span class="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                        Available for Projects
                    </span>
                    <span
                        class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium 
                               bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 
                               hover:bg-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 cursor-default">
                        <span class="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                        Open to Collaborate
                    </span>
                </div>
            </div>

            <!-- Right Section - Enhanced Profile Card -->
            <div ref="rightSection" class="flex justify-center lg:justify-end">
                <div class="relative group">
                    <!-- Outer glow effect -->
                    <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 
                               rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 
                               group-hover:duration-200 animate-pulse"></div>

                    <!-- Main profile card -->
                    <div class="relative w-72 sm:w-80 h-80 sm:h-88 rounded-3xl shadow-2xl overflow-hidden
                               bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 
                               border border-gray-700/50 group-hover:border-gray-600/50
                               transition-all duration-700 group-hover:scale-105">

                        <!-- Background pattern -->
                        <div class="absolute inset-0 opacity-5">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20">
                            </div>
                            <div class="absolute top-4 right-4 w-20 h-20 border border-indigo-500/20 rounded-full">
                            </div>
                            <div class="absolute bottom-8 left-6 w-16 h-16 border border-purple-500/20 rounded-full">
                            </div>
                        </div>

                        <!-- Profile icon container -->
                        <div class="relative h-full flex items-center justify-center p-8">
                            <div class="relative">
                                <!-- Icon glow -->
                                <div class="absolute inset-0 bg-indigo-400/20 rounded-full blur-xl scale-150 
                                           group-hover:bg-indigo-400/30 transition-all duration-700"></div>

                                <!-- Main icon -->
                                <CircleUser class="relative w-40 h-40 sm:w-48 sm:h-48 text-indigo-400 
                                                 group-hover:text-indigo-300 transition-all duration-700 
                                                 group-hover:scale-110 drop-shadow-2xl" stroke-width="1.2" />

                                <!-- Animated ring -->
                                <div class="absolute inset-0 border-2 border-transparent rounded-full 
                                           bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 
                                           bg-clip-border animate-spin-slow opacity-30"></div>
                            </div>
                        </div>

                        <!-- Floating accent elements -->
                        <div class="absolute top-6 left-6 w-2 h-2 bg-purple-400 rounded-full opacity-60 
                                   animate-pulse group-hover:animate-bounce"></div>
                        <div class="absolute top-12 right-8 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-60 
                                   animate-pulse delay-300 group-hover:animate-bounce"></div>
                        <div class="absolute bottom-10 right-6 w-2 h-2 bg-indigo-400 rounded-full opacity-60 
                                   animate-pulse delay-700 group-hover:animate-bounce"></div>

                        <!-- Bottom gradient overlay -->
                        <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t 
                                   from-gray-900/80 via-gray-900/20 to-transparent"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 text-center">
            <div v-for="(stat, index) in stats" :key="index" class="space-y-1">
                <p :ref="(el) => (statRefs[index] = el)" class="text-3xl md:text-4xl font-bold text-purple-400">
                    0
                </p>
                <p class="text-gray-400 text-sm font-medium">{{ stat.label }}</p>
            </div>
        </div>

        <div class="mt-20">
            <h2 class="text-2xl font-bold text-purple-400 mb-4">Tech Skills</h2>
            <SkillChart :labels="skillLabels" :data="skillValues" />
        </div>

        <ExperienceSection title="Experience" titleClass="text-4xl font-bold" :showCta="false" :showUnderline="false" />

        <!-- Fun Facts - Interactive Grid of Icons -->
        <div ref="factsSection" class="mb-4 text-center p-4 rounded-xl shadow-lg bg-gray-800">
            <h2 class="text-2xl font-bold text-purple-400 mb-8 tracking-wide">
                Fun Facts About Me
            </h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                <div v-for="(fact, index) in facts" :key="index" class="relative group flex flex-col items-center justify-center p-4 h-32 rounded-lg cursor-pointer
                           border border-gray-700 bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300
                           hover:scale-105" @mouseenter="activeFact = index" @mouseleave="activeFact = null"
                    :ref="(el) => (factItemRefs[index] = el)">
                    <component :is="factIcons[index % factIcons.length]"
                        :class="['w-10 h-10', 'text-indigo-400 group-hover:text-cyan-400 transition-colors duration-300', activeFact === index ? 'animate-bounce-icon' : '']"
                        stroke-width="1.5" />
                    <p class="mt-2 text-sm font-medium text-white opacity-80">{{ fact.shortTitle }}</p>

                    <!-- Popover for fact details -->
                    <transition name="fade-slide">
                        <div v-if="activeFact === index"
                            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-3 rounded-lg text-sm font-medium whitespace-nowrap z-30 shadow-lg
                                   bg-gradient-to-br from-purple-700/80 to-indigo-700/80 text-white backdrop-blur-sm border border-white/10">
                            {{ fact.fullText }}
                        </div>
                    </transition>
                </div>
            </div>
        </div>

        <!-- Language Bars -->
        <div ref="languageSection" class="mt-24 space-y-6">
            <h2 class="text-2xl font-bold text-purple-400 mb-6">Language Proficiency</h2>
            <div v-for="lang in languages" :key="lang.name" class="space-y-2">
                <div class="flex justify-between text-sm font-medium opacity-90 text-white">
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

        <div class="mt-12 flex justify-center">
            <a href="my-cv.pdf" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-lg text-lg font-semibold hover:bg-violet-700 transition">
                <FileText class="w-5 h-5" />
                See my Resume
            </a>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { storeToRefs } from 'pinia'
import { useAboutStore } from '@/stores/aboutStore'
import SkillChart from '@/components/about/SkillChart.vue'
import {
    Star, CircleUser, Laptop, FileText,
    MessageSquareText, Dumbbell, Book, Brain, Gamepad2, Feather, Heart, Coffee, Leaf, Sparkles
} from 'lucide-vue-next'
import ExperienceSection from '../components/home/ExperienceSection.vue'
// import resume from '@/assets/Test.pdf' // Keep if you use a local PDF, otherwise remove and use external link

const route = useRoute()

gsap.registerPlugin(ScrollTrigger)

const aboutSection = ref(null)
const heading = ref(null)
const rightSection = ref(null)
const para1 = ref(null)
const para2 = ref(null)
const para3 = ref(null)
const factsSection = ref(null)
const languageSection = ref(null)

const statRefs = ref([])
const showBars = ref(false)
const factItemRefs = ref([])

const aboutStore = useAboutStore()
const { stats } = storeToRefs(aboutStore)

const skillLabels = ['Frontend', 'Backend', 'UI/UX', 'Badminton', 'Reading']
const skillValues = [76, 80, 60, 77, 65]

// Fun Facts - Updated with short titles and full text
const facts = [
    { shortTitle: 'Badminton Lover', fullText: 'I love badminton; it\'s my favorite way to stay active!' },
    { shortTitle: 'Lifelong Learner', fullText: 'Always learning something new to keep my skills sharp.' },
    { shortTitle: 'Endlessly Curious', fullText: 'My curiosity drives me to explore new technologies and ideas.' },
    { shortTitle: 'Gamer at Heart', fullText: 'When not coding, you can find me enjoying a good game.' },
    { shortTitle: 'Detail-Oriented', fullText: 'I\'m a bit of a perfectionist when it comes to clean code and design.' },
    { shortTitle: 'Fantasy Reader', fullText: 'I enjoy diving into epic fantasy books in my free time.' },
    { shortTitle: 'Indonesian Roots', fullText: 'Proudly grew up in Indonesia, shaping my diverse perspective.' },
    { shortTitle: 'God', fullText: 'God is my guide in all aspects of life.' },
    { shortTitle: 'C-Pop Enthusiast', fullText: 'I like listening to Chinese music; it helps me focus.' },
    { shortTitle: 'Dream Flier', fullText: 'I can fly... in my dreams, at least!' },
]

// Array of Lucide icon components to cycle through
const factIcons = [
    Dumbbell,    // For Badminton Lover
    Book,        // For Lifelong Learner
    Brain,       // For Endlessly Curious
    Gamepad2,    // For Gamer at Heart
    Feather,     // For Detail-Oriented (light touch/precision)
    Book,        // For Fantasy Reader (repeated or pick another)
    Leaf,        // For Indonesian Roots (nature/origin)
    Star,        // For Faith-Guided (spiritual guidance)
    MessageSquareText, // For C-Pop Enthusiast (music/language)
    Sparkles     // For Dream Flier (whimsical)
];

const activeFact = ref(null)

const languages = [
    { name: 'English', level: 90, color: '--color-secondary' },
    { name: 'Indonesian', level: 85, color: '--color-highlight' },
]
const getGradient = (colorVar) => {
    const color = getComputedStyle(document.documentElement)
        .getPropertyValue(colorVar)
        .trim()
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

    gsap.from(rightSection.value, {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: aboutSection.value,
            start: 'top 80%'
        }
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

    // GSAP animation for the fact grid items
    gsap.fromTo(
        factItemRefs.value,
        { opacity: 0, scale: 0.8, y: 20 },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: factsSection.value,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        }
    )
}
onMounted(() => {
    runAnimations()
})

watch(
    () => route.path,
    () => {
        nextTick(() => {
            runAnimations()
        })
    }
)
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

/* Specific bounce animation for hovered icons */
@keyframes bounce-icon {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-8px);
    }
}

.animate-bounce-icon {
    animation: bounce-icon 0.6s ease-in-out infinite alternate;
}
</style>