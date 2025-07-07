<template>
    <section class="max-w-5xl mx-auto py-20 px-6">
        <div v-if="project">
            <div class="text-center mb-16">
                <h1 class="text-4xl font-extrabold mb-4">{{ project.title }}</h1>
                <p class="text-lg mb-6 leading-relaxed">{{ project.description }}</p>

                <!-- Project Links -->
                <div class="flex justify-center gap-4 mb-10">
                    <a v-if="project.links?.github" :href="project.links.github" target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        View Code
                    </a>

                    <a v-if="project.links?.website" :href="project.links.website" target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                    </a>
                </div>

                <img :src="project.images[0].src" :alt="project.images[0].description" :class="[
                    'rounded-xl shadow-lg mx-auto',
                    isPortraitImage(project.images[0]) ? 'max-w-md sm:max-w-lg' : 'max-w-3xl'
                ]" />
                <p class="text-sm text-muted mt-4">{{ project.images[0].description }}</p>
            </div>

            <div class="space-y-20">
                <div v-for="(img, index) in project.images.slice(1)" :key="index" :ref="el => imageRefs[index] = el"
                    class="flex flex-col md:flex-row items-center gap-10"
                    :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''">
                    <div class="w-full md:w-1/2 flex justify-center">
                        <img :src="img.src" :alt="img.description" :class="[
                            'rounded-xl shadow-lg max-w-full h-auto',
                            isPortraitImage(img) ? 'max-w-40 sm:max-w-64' : 'w-full'
                        ]" v-tilt="{ max: 15, speed: 200, glare: true, 'max-glare': 0.3, scale: 1.1 }" />
                    </div>
                    <p class="text-lg text-muted md:w-1/2">{{ img.description }}</p>
                </div>
            </div>
        </div>

        <div v-else>
            <p>Project not found.</p>
        </div>
    </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, ref, onMounted } from 'vue'
import { useProjectStore } from '@/stores/projectStore'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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

// Function to detect if an image is likely portrait/mobile based on description
const isPortraitImage = (img) => {
    const imageDescription = img.description.toLowerCase()
    const projectDescription = project.value.description.toLowerCase()
    const portraitKeywords = ['mobile', 'phone', 'portrait', 'vertical', 'app screen', 'mobile version']

    return portraitKeywords.some(keyword =>
        imageDescription.includes(keyword) || projectDescription.includes(keyword)
    )
}

onMounted(() => {
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