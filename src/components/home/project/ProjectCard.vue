<template>
    <div class="group project-card rounded-3xl overflow-hidden shadow-lg cursor-pointer relative"
        @click="$emit('click')" v-tilt="{ max: 15, speed: 200, glare: true, 'max-glare': 0.3, scale: 1.05 }">
        <div class="w-full aspect-video overflow-hidden relative">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
            <div
                class="absolute inset-0 bg-black/12 transition-opacity duration-300 group-hover:bg-opacity-25">
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    project: {
        type: Object,
        required: true
    }
})
</script>