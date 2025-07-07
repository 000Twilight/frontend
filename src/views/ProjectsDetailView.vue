<template>
    <div class="min-h-screen">
        <div v-if="project">
            <!-- Hero Section -->
            <section class="relative overflow-hidden py-20 px-6">
                <div class="max-w-6xl mx-auto relative z-10">
                    <!-- Breadcrumb -->
                    <nav class="mb-8">
                        <router-link to="/projects"
                            class="inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-300">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Projects
                        </router-link>
                    </nav>

                    <div class="grid lg:grid-cols-2 gap-16 items-center">
                        <!-- Left Content -->
                        <div class="space-y-8">
                            <div>
                                <h1 ref="title"
                                    class="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight mb-6">
                                    <span
                                        class="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                                        {{ project.title }}
                                    </span>
                                </h1>

                                <div ref="description" class="prose prose-lg prose-invert max-w-none">
                                    <p class="text-lg leading-relaxed">
                                        {{ project.description }}
                                    </p>
                                </div>
                            </div>

                            <!-- Action Buttons -->
                            <div ref="buttons" class="flex flex-wrap gap-4">
                                <a v-if="project.links?.github" :href="project.links.github" target="_blank"
                                    rel="noopener noreferrer"
                                    class="group inline-flex items-center gap-3 px-8 py-4 bg-gray-800/80 hover:bg-gray-700/80
                                        rounded-xl font-medium transition-all duration-300 transform hover:scale-105 
                                          shadow-lg hover:shadow-2xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50">
                                    <img :src="github" alt="GitHub"
                                        class="w-6 h-6 filter invert group-hover:rotate-12 transition-transform duration-300" />
                                    <span>View Code</span>
                                </a>

                                <a v-if="project.links?.website" :href="project.links.website" target="_blank"
                                    rel="noopener noreferrer" class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 
                                          hover:from-purple-500/80 hover:to-indigo-500/80 rounded-xl font-medium 
                                          transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl 
                                          backdrop-blur-sm">
                                    <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <ellipse cx="12" cy="12" rx="9" ry="6" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                                    </svg>
                                    <span>Live Demo</span>
                                </a>
                            </div>
                        </div>

                        <!-- Right Content - Hero Image -->
                        <div ref="heroImage">
                            <div class="relative overflow-hidden rounded-xl shadow-2xl"
                                v-tilt="{ max: 10, speed: 200, glare: false, scale: 1 }">
                                <img :src="project.images[0].src" :alt="project.images[0].description" :class="[
                                    'rounded-xl shadow-lg mx-auto',
                                    isPortraitImage(project.images[0]) ? 'max-w-md mx-auto' : 'max-w-full'
                                ]" />
                            </div>

                            <!-- Image caption -->
                            <p class="text-center text-gray-400 text-sm mt-4 font-medium">
                                {{ project.images[0].description }}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Project Gallery Section -->
            <section class="p-6">
                <div class="max-w-6xl mx-auto">
                    <div class="space-y-24">
                        <div v-for="(img, index) in project.images.slice(1)" :key="index"
                            :ref="el => imageRefs[index] = el" class="group">

                            <!-- Alternating layout -->
                            <div :class="[
                                'grid lg:grid-cols-2 gap-12 items-center',
                                index % 2 === 0 ? 'lg:grid-flow-col' : 'lg:grid-flow-col-dense'
                            ]">
                                <!-- Image -->
                                <div :class="[
                                    'relative',
                                    index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                                ]">
                                    <img :src="img.src" :alt="img.description" :class="[
                                        'rounded-xl shadow-lg',
                                        isPortraitImage(img) ? 'max-w-sm mx-auto w-full h-auto' : 'w-full h-auto'
                                    ]" v-tilt="{ max: 15, speed: 200, glare: true, 'max-glare': 0.3, scale: 1.1 }" />
                                </div>

                                <!-- Content -->
                                <div :class="[
                                    'space-y-6',
                                    index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                                ]">
                                    <!-- Feature number -->
                                    <div class="flex items-center gap-4">
                                        <div class="flex items-center justify-center w-12 h-12 rounded-2xl
                                                   bg-purple-500 font-bold text-lg">
                                            {{ String(index + 2).padStart(2, '0') }}
                                        </div>
                                        <div class="h-px bg-gradient-to-r from-purple-500 to-cyan-500 flex-1"></div>
                                    </div>

                                    <!-- Description -->
                                    <div class="prose prose-lg prose-invert max-w-none">
                                        <h3 class="text-2xl font-bold mb-2">
                                            {{ img.subtitle }}
                                        </h3>
                                        <p class="text-gray-300 leading-relaxed">
                                            {{ img.description }}
                                        </p>
                                    </div>

                                    <!-- Feature tags -->
                                    <div class="flex flex-wrap gap-2">
                                        <span v-for="tag in img.features" :key="tag" class="px-3 py-1 bg-gray-800/60 text-gray-300 text-sm rounded-full 
                                                     border border-gray-700/50 backdrop-blur-sm">
                                            {{ tag }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Technologies Section -->
            <section class="py-20 px-6">
                <div class="max-w-4xl mx-auto text-center">
                    <div ref="techTitle" class="mb-12">
                        <h2 class="text-3xl md:text-4xl font-boldmb-4">
                            Technologies <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Used</span>
                        </h2>
                        <p class="text-gray-400 text-lg">Built with modern tools and frameworks</p>
                    </div>

                    <div ref="techGrid" class="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div v-for="tech in getTechnologies(project)" :key="tech" class="group p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 
                                    hover:border-gray-600/50 hover:bg-gray-800/50 transition-all duration-300 
                                    backdrop-blur-sm hover:scale-105">
                            <div class="text-center">
                                <div class="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-cyan-500 
                                           rounded-lg flex items-center justify-centerfont-bold">
                                    {{ tech.charAt(0).toUpperCase() }}
                                </div>
                                <p class="text-gray-300 font-medium">{{ tech }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div v-else class="min-h-screen flex items-center justify-center">
            <div class="text-center">
                <h2 class="text-2xl font-boldmb-4">Project Not Found</h2>
                <router-link to="/projects" class="text-purple-400 hover:text-purple-300 transition-colors">
                    ← Back to Projects
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, ref, onMounted } from 'vue'
import { useProjectStore } from '@/stores/projectStore'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import github from '@/assets/social-media/github.svg'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
const router = useRouter()
const { projects } = useProjectStore()

const slug = route.params.slug
const project = computed(() => projects.find(p => p.slug === slug))

if (!project.value) {
    router.replace({ name: 'projects' })
}

const imageRefs = ref([])
const title = ref(null)
const description = ref(null)
const buttons = ref(null)
const heroImage = ref(null)
const galleryTitle = ref(null)
const techTitle = ref(null)
const techGrid = ref(null)

// Function to detect if an image is likely portrait/mobile based on description
const isPortraitImage = (img) => {
    const imageDescription = img.description.toLowerCase()
    const projectDescription = project.value.description.toLowerCase()
    const portraitKeywords = ['mobile', 'phone', 'portrait', 'vertical', 'app screen', 'mobile version']

    return portraitKeywords.some(keyword =>
        imageDescription.includes(keyword) || projectDescription.includes(keyword)
    )
}

// Function to get technologies based on project
const getTechnologies = (project) => {
    const projectId = project.slug.split('-')[1]
    const techMap = {
        '1': ['Vue.js', 'Laravel', 'MySQL', 'Tailwind'],
        '2': ['React', 'Node.js', 'MongoDB', 'CSS'],
        '3': ['React Native', 'Firebase', 'API', 'Mobile'],
        '4': ['Flutter', 'Dart', 'SQLite', 'Design'],
        '5': ['Figma', 'UI/UX', 'Prototype', 'Research'],
        '6': ['Next.js', 'TypeScript', 'PostgreSQL', 'Vercel']
    }
    return techMap[projectId] || ['JavaScript', 'HTML', 'CSS', 'API']
}

onMounted(() => {
    // Hero section animations
    gsap.from(title.value, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    })

    gsap.from(description.value, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    })

    gsap.from(buttons.value, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out'
    })

    gsap.from(heroImage.value, {
        opacity: 0,
        x: 100,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    })

    // Gallery title animation
    gsap.from(galleryTitle.value, {
        scrollTrigger: {
            trigger: galleryTitle.value,
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    })

    // Tech section animations
    gsap.from(techTitle.value, {
        scrollTrigger: {
            trigger: techTitle.value,
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    })

    gsap.from(techGrid.value?.children || [], {
        scrollTrigger: {
            trigger: techGrid.value,
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
    })

    // Gallery images animation
    imageRefs.value.forEach((el, index) => {
        if (el) {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 60,
                duration: 0.8,
                ease: 'power2.out',
                delay: index * 0.1
            })
        }
    })
})
</script>