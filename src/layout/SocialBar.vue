<template>
    <div class="fixed w-1/12 bottom-1 flex flex-col justify-center items-center z-50">
        <a v-for="item in socialMedia" :key="item.image_file" :href="item.link" target="_blank"
            rel="noopener noreferrer">
            <img :src="item.image_file" :alt="item.alt_text"
                class="w-6 md:w-8 my-2 transition-all hover:opacity-50 transform hover:scale-90 filter invert" />
        </a>

        <div class="w-[3px] h-24 md:h-32 mt-4 bg-gradient-to-b from-cyan-400 via-indigo-600 to-purple-500 rounded-full">
        </div>
    </div>
</template>

<script setup>
import { usePersonalDetails } from '@/stores/personalDetailsStore'
const { socialMedia } = usePersonalDetails()
</script>