<template>
    <section ref="projectsSection" class="relative py-16 px-3 m-0 overflow-hidden">
        <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div ref="leftTextBlock"
                    class="lg:col-span-6 flex flex-col justify-center items-center text-center lg:items-start lg:text-left space-y-2">
                    <p class="text-base md:text-lg font-semibold tracking-wide uppercase text-highlight">
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

                    <!-- <div class="ml-0 md:ml-100 transform rotate-90 hidden md:block">
                        <RouterLink to="/projects" class="inline-block">
                            <img src="@/assets/arrows-right.svg" alt="Navigate to Projects" ref="bouncingArrow"
                                class="w-10 md:w-14" />
                        </RouterLink>
                    </div> -->
                </div>

                <div ref="textCardsContainer" class="lg:col-span-6 flex flex-col space-y-6 items-center lg:items-start">
                    <div ref="textCard1"
                        class="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110 bg-opacity-5 backdrop-blur rounded-xl">
                        <TextCard heading="Websites"
                            text="He adds certain special hidden recipes and making his websites look enticing." />
                    </div>
                    <div ref="textCard2"
                        class="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110 bg-opacity-5 backdrop-blur rounded-xl sm:ml-40 sm:-my-6 lg:ml-60 lg:-my-10 z-auto">
                        <TextCard heading="Apps"
                            text="The art of creating some awesome smartphone applications using React Native." />
                    </div>
                    <div ref="textCard3"
                        class="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110 bg-opacity-5 backdrop-blur rounded-xl">
                        <TextCard heading="UI/UX"
                            text="He uses his outstanding engineering abilities to provide users an awesome interface and experience" />
                    </div>
                </div>
            </div>
        </div>

        <div class="relative max-w-6xl mx-auto mt-20" id="projects">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                <ProjectCard v-for="(project, index) in limitedProjects" :key="index" :project="project" />
            </div>

            <div class="flex justify-center mt-10 lg:mt-8">
                <RouterLink to="/projects"
                    class="show-more-btn font-semibold text-lg rounded-full py-3 px-8 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 text-white relative overflow-hidden">
                    Show me more! 🔥
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { RouterLink } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from './project/ProjectCard.vue'
import TextCard from './project/TextCard.vue'
import { useProjectStore } from '@/stores/projectStore'

gsap.registerPlugin(ScrollTrigger)

const projectsSection = ref(null)
const title = ref(null)
// const bouncingArrow = ref(null)
const leftTextBlock = ref(null)
const textCardsContainer = ref(null)

// New refs for each TextCard container div
const textCard1 = ref(null)
const textCard2 = ref(null)
const textCard3 = ref(null)

const { projects } = useProjectStore()
const limitedProjects = projects.slice(0, 6)

onMounted(async () => {
    await nextTick()

    // Animate title
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

    // Animate bouncing arrow
    // gsap.to(bouncingArrow.value, {
    //     x: 60,
    //     duration: 1,
    //     ease: 'power1.inOut',
    //     yoyo: true,
    //     repeat: -1,
    // })

    // Animate project cards on scroll
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

    // Animate left text block on scroll
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

    // Animate each TextCard individually, with staggered delays
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

<style scoped>
.show-more-btn {
    display: inline-block;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 1.125rem;
    cursor: pointer;
    position: relative;
    background-size: 200% 200%;
    transition: all 0.5s ease;
}

.show-more-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.05;
    z-index: 1;
    transition: left 0.5s ease;
}

.show-more-btn:hover::before {
    left: 0;
}

.show-more-btn:hover {
    transform: scale(1.05);
    background-position: right center;
}

.show-more-btn:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(34, 211, 238, 0.5);
}
</style>