<template>
    <transition name="fade-scale">
        <div v-if="isOpen"
            class="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto backdrop-blur-sm bg-black/70">
            <div
                class="relative bg-color w-full max-w-2xl mx-4 md:mx-0 my-10 rounded-3xl shadow-2xl border border-white/30">
                <button @click="closeModal"
                    class="absolute top-5 right-5 hover:text-pink transition-opacity hover:opacity-80">
                    <FaTimes class="w-6 h-6 cursor-pointer" />
                </button>

                <div class="p-6 sm:p-8">
                    <img :src="project.image" :alt="project.title"
                        class="rounded-2xl w-full h-60 sm:h-72 object-cover mb-6 shadow-lg" />

                    <h2 class="text-3xl font-bold mb-2 tracking-tight">{{ project.title }}</h2>
                    <p class="mb-6 text-muted leading-relaxed">{{ project.description }}</p>

                    <div class="flex justify-end">
                        <RouterLink :to="`/projects/${project.slug}`"
                            class="bg-pink px-5 py-2.5 rounded-lg font-semibold hover:bg-opacity-80 transition">
                            See Full Project →
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { FaTimes } from 'vue3-icons/fa'

const props = defineProps({
    project: Object,
    isOpen: Boolean
})

const emit = defineEmits(['close'])
const closeModal = () => emit('close')
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
    transition: all 0.3s ease;
}

.fade-scale-enter-from {
    opacity: 0;
    transform: scale(0.95);
}

.fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.95);
}
</style>