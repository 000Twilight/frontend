<template>
    <footer ref="footerRef" class="px-6 py-12 mt-auto">
        <div class="max-w-7xl mx-auto flex flex-col gap-4 overflow-hidden">
            <div ref="topSection"
                class="flex flex-col items-center justify-between gap-2 sm:flex-row sm:justify-between">
                <RouterLink to="/"
                    class="text-3xl font-extrabold tracking-tight text-primary flex items-center transition-colors">
                    Mario Richie Lim
                </RouterLink>

                <nav class="flex flex-wrap gap-8 text-sm font-medium">
                    <RouterLink to="/about"
                        class="transition duration-300 ease-in-out hover:custom-hover hover:-translate-y-0.5">
                        About
                    </RouterLink>
                    <RouterLink to="/projects"
                        class="transition duration-300 ease-in-out hover:custom-hover hover:-translate-y-0.5">
                        Projects
                    </RouterLink>
                    <RouterLink to="/contact"
                        class="transition duration-300 ease-in-out hover:custom-hover hover:-translate-y-0.5">
                        Contact
                    </RouterLink>
                </nav>
            </div>

            <div ref="divider" class="h-px w-full bg-muted opacity-25"></div>

            <!-- Bottom Section -->
            <div ref="bottomSection"
                class="flex flex-col items-center text-sm justify-between gap-2 sm:flex-row sm:justify-between">
                <div class="text-muted">
                    © {{ currentYear }} Mario Richie Lim. All rights reserved.
                </div>

                <div class="flex justify-center md:justify-end space-x-6 text-xl">
                    <a href="https://github.com/000Twilight" target="_blank" rel="noopener" aria-label="GitHub"
                        class="transition duration-300 ease-in-out hover:scale-[1.15] hover:-translate-y-0.5 hover:shadow-icon">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/mario-richie-lim" target="_blank" rel="noopener"
                        aria-label="LinkedIn"
                        class="transition duration-300 ease-in-out hover:scale-[1.15] hover:-translate-y-0.5 hover:shadow-icon">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener" aria-label="Twitter"
                        class="transition duration-300 ease-in-out hover:scale-[1.15] hover:-translate-y-0.5 hover:shadow-icon">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RouterLink } from 'vue-router'

gsap.registerPlugin(ScrollTrigger)

const currentYear = new Date().getFullYear()

const footerRef = ref(null)
const topSection = ref(null)
const divider = ref(null)
const bottomSection = ref(null)

onMounted(() => {
    gsap.from(topSection.value, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: footerRef.value,
            start: 'top 95%',
            end: 'bottom bottom',
            toggleActions: 'play none none none',
        },
    })

    gsap.from(divider.value, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: footerRef.value,
            start: 'top 95%',
            end: 'bottom bottom',
            toggleActions: 'play none none none',
        },
    })

    gsap.from(bottomSection.value, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: footerRef.value,
            start: 'top 95%',
            end: 'bottom bottom',
            toggleActions: 'play none none none',
        },
    })
})
</script>

<style scoped>
.hover\:custom-hover:hover {
    color: var(--color-primary);
}
</style>