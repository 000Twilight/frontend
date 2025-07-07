<template>
    <div class="group shadow-lg cursor-pointer relative flex items-center justify-center" @click="$emit('click')">
        <div :class="[
            isPortrait ? 'w-1/2 max-w-xs' : 'w-full aspect-video',
            'relative rounded-xl'
        ]" v-tilt="{ max: 15, speed: 200, glare: true, 'max-glare': 0.3, scale: 1.05 }">
            <img :src="project.images[0].src" :alt="project.title" class="w-full h-full object-contain"
                @load="checkPortrait" ref="imgRef" />
            <div class="absolute inset-0 bg-black/12 transition-opacity duration-300 group-hover:bg-opacity-25"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
})

const isPortrait = ref(false)
const imgRef = ref(null)

function checkPortrait() {
    const img = imgRef.value
    if (img && img.naturalHeight > img.naturalWidth) {
        isPortrait.value = true
    } else {
        isPortrait.value = false
    }
}
</script>