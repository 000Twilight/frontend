<template>
    <section class="max-w-5xl mx-auto py-20 px-6">
        <div v-if="project">
            <div class="text-center mb-16">
                <h1 class="text-4xl font-extrabold mb-4">{{ project.title }}</h1>
                <p class="text-lg mb-10 leading-relaxed">{{ project.description }}</p>
                <img :src="project.images[0].src" :alt="project.images[0].description"
                    class="rounded-xl shadow-lg mx-auto max-w-3xl" />
                <p class="text-sm text-muted mt-4">{{ project.images[0].description }}</p>
            </div>

            <div class="space-y-20">
                <div v-for="(img, index) in project.images.slice(1)" :key="index" :ref="el => imageRefs[index] = el"
                    class="flex flex-col md:flex-row items-center gap-10"
                    :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''">
                    <img :src="img.src" :alt="img.description" class="w-full md:w-1/2 rounded-xl shadow-lg"
                        v-tilt="{ max: 15, speed: 200, glare: true, 'max-glare': 0.3, scale: 1.1 }" />
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