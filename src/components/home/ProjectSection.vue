<template>
    <section ref="projectsSection" class="relative py-16 px-3 m-0 overflow-hidden">
        <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div ref="leftTextBlock"
                    class="lg:col-span-6 flex flex-col justify-center items-center text-center lg:items-start lg:text-left space-y-2">
                    <p class="text-base md:text-lg font-semibold tracking-wide uppercase text-purple-400">
                        — Let’s walk the talk.
                    </p>

                    <h1 ref="title"
                        class="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                        Crafted digital
                        <span
                            class="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent font-black">
                            experiences
                        </span>
                        for remarkable people
                    </h1>

                    <h2 class="text-base sm:text-lg md:text-xl font-semibold leading-snug">
                        Here's a glimpse of what he’s
                        <span
                            class="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent font-bold underline decoration-indigo-400 decoration-2 underline-offset-4">
                            passionately crafted
                        </span>.
                    </h2>
                </div>

                <div ref="textCardsContainer" class="lg:col-span-6 flex flex-col space-y-6 items-center lg:items-start">
                    <div ref="textCard1"
                        class="w-64 h-auto shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-110 bg-gray-800 bg-opacity-5 backdrop-blur rounded-xl">
                        <TextCard heading="Websites"
                            text="He adds certain special hidden recipes and making his websites look enticing." />
                    </div>
                    <div ref="textCard2"
                        class="w-64 h-auto shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-110 bg-gray-800 bg-opacity-5 backdrop-blur rounded-xl sm:ml-40 sm:-my-6 lg:ml-60 lg:-my-10 z-auto">
                        <TextCard heading="Apps"
                            text="The art of creating some awesome smartphone applications using React Native." />
                    </div>
                    <div ref="textCard3"
                        class="w-64 h-auto shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-110 bg-gray-800 bg-opacity-5 backdrop-blur rounded-xl">
                        <TextCard heading="UI/UX"
                            text="He uses his outstanding engineering abilities to provide users an awesome interface and experience" />
                    </div>
                </div>
            </div>
        </div>

        <div class="relative max-w-6xl mx-auto mt-20" id="projects">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 items-center">
                <!-- Assuming ProjectCard.vue exists and works correctly -->
                <ProjectCard v-for="(project, index) in limitedProjects" :key="index" :project="project"
                    @click="openProject(project)" />
            </div>

            <div class="flex justify-center mt-10 lg:mt-8">
                <RouterLink to="/projects"
                    class="group relative inline-block text-center tracking-wide uppercase text-lg font-semibold py-3 px-8 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 text-white overflow-hidden
                           transition-all duration-500 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50">
                    <span class="relative z-10">Show me more! 🔥</span>
                    <span
                        class="absolute inset-0 bg-black opacity-5 group-hover:opacity-10 transition duration-300"></span>
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from './project/ProjectCard.vue'
import TextCard from './project/TextCard.vue'
import { useProjectStore } from '@/stores/projectStore'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()
const projectsSection = ref(null)
const title = ref(null)
const leftTextBlock = ref(null)
const textCardsContainer = ref(null)

const textCard1 = ref(null)
const textCard2 = ref(null)
const textCard3 = ref(null)

const { projects } = useProjectStore()
const limitedProjects = projects.slice(0, 6)

const openProject = (project) => {
    router.push({ name: 'projectsDetail', params: { slug: project.slug } })
}

onMounted(async () => {
    await nextTick()

    gsap.from(title.value, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: title.value,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
        },
    })

    const cards = projectsSection.value.querySelectorAll('.project-card')
    cards.forEach((card, index) => {
        gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            delay: index * 0.15,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            },
        })
    })

    gsap.from(leftTextBlock.value, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: leftTextBlock.value,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
        },
    })

    const textCardsRefs = [textCard1.value, textCard2.value, textCard3.value]

    textCardsRefs.forEach((el, i) => {
        gsap.from(el, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            delay: i * 0.25,
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            },
        })
    })

    ScrollTrigger.refresh()
})
</script>
