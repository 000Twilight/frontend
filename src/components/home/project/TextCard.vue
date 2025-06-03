<template>
    <div
        class="text-white/70 w-64 h-auto p-6 rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-400 shadow-light-xl transform transition-all duration-500 hover:scale-110 hover:shadow-2xl group">
        <div class="relative space-y-2">
            <h3
                class="font-bold text-xl tracking-wide group-hover:text-white/90 transition-colors duration-300">
                {{ heading }}
            </h3>
            <p class="text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
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