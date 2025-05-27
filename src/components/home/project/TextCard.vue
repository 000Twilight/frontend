<template>
    <div
        class="text-card w-64 h-auto p-6 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
        <!-- TextCard Content -->
        <div class="relative">
            <h3 class="text-white font-semibold text-xl mb-3 group-hover:text-white transition-colors">
                {{ heading }}
            </h3>
            <p class="text-white text-sm opacity-80 mb-4 group-hover:opacity-100 transition-opacity">
                {{ text }}
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    heading: String,
    text: String,
})
</script>