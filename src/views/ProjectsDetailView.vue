<template>
    <section class="max-w-4xl mx-auto py-20 px-6">
        <div v-if="project">
            <h1 class="text-4xl font-extrabold mb-6">{{ project.title }}</h1>
            <img :src="project.image" :alt="project.title" class="mb-6 rounded-lg shadow-lg" />
            <p class="text-lg leading-relaxed">{{ project.description }}</p>
        </div>
        <div v-else>
            <p>Project not found.</p>
        </div>
    </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { useProjectStore } from '@/stores/projectStore'

const route = useRoute()
const router = useRouter()
const { projects } = useProjectStore()

const slug = route.params.slug

const project = computed(() => projects.find(p => p.slug === slug))

if (!project.value) {
    router.replace({ name: 'projects' })
}
</script>