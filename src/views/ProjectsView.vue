<template>
    <section ref="projectsSection" class="relative py-20 px-6 max-w-7xl mx-auto">
        <h1 ref="title"
            class="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight bg-gradient-to-r from-purple-500 via-indigo-600 to-cyan-400 bg-clip-text text-transparent select-none">
            All Projects
        </h1>

        <p class="text-center text-lg max-w-xl mx-auto mb-12 text-muted">
            Explore my projects, showcasing a variety of skills and technologies I’m passionate about.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <ProjectCard v-for="(project, index) in projects" :key="project.slug || index" :project="project"
                class="project-card cursor-pointer rounded-lg duration-300 shadow-md hover:shadow-xl hover:scale-[1.05]"
                @click="openProject(project)" v-tilt />
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import ProjectCard from '@/components/home/project/ProjectCard.vue'
import { useProjectStore } from '@/stores/projectStore'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projectsSection = ref(null)
const title = ref(null)
const router = useRouter()

const { projects } = useProjectStore()

const openProject = (project) => {
    router.push({ name: 'projectsDetail', params: { slug: project.slug } })
}

onMounted(async () => {
    await nextTick()

    gsap.from(title.value, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
    })

    const cards = projectsSection.value.querySelectorAll('.project-card')
    cards.forEach((card, index) => {
        gsap.from(card, {
            y: 30,
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: 'power3.out',
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
            },
        })
    })

    ScrollTrigger.refresh()
})
</script>