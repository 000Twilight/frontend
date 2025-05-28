<template>
    <transition name="slide-fade">
        <nav v-show="isVisible"
            class="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0d1117]/80 shadow-md transition-all duration-300">
            <div class="container mx-auto px-8 md:px-14 py-4 flex justify-between items-center">
                <div class="text-2xl font-bold tracking-wide">
                    <!-- Logo or title -->
                </div>
                <div class="hidden md:flex space-x-8 items-center">
                    <RouterLink to="/" class="nav-link" exact-active-class="active-link">Home</RouterLink>
                    <RouterLink to="/about" class="nav-link" exact-active-class="active-link">About</RouterLink>
                    <RouterLink to="/projects" class="nav-link" active-class="active-link">Projects</RouterLink>
                    <RouterLink to="/contact" class="nav-link" exact-active-class="active-link">Contact</RouterLink>
                </div>
            </div>
        </nav>
    </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

const isVisible = ref(true)
let lastScroll = window.scrollY

const handleScroll = () => {
    const currentScroll = window.scrollY

    if (currentScroll > lastScroll && currentScroll > 50) {
        isVisible.value = false // scrolling down
    } else {
        isVisible.value = true // scrolling up
    }

    lastScroll = currentScroll
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Navbar Links */
.nav-link {
    position: relative;
    font-weight: 600;
    color: var(--color-text);
    transition: color 0.3s ease;
}

/* Underline on hover */
.nav-link::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    bottom: -4px;
    background-color: var(--color-primary);
    transition: width 0.3s;
}

/* Grow underline on hover */
.nav-link:hover::after {
    width: 100%;
}

/* Hover Color */
.nav-link:hover {
    color: var(--color-primary);
}

/* Active Link */
.active-link {
    color: var(--color-primary);
    font-weight: 700;
}

.active-link::after {
    width: 100%;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .nav-link {
        font-size: 1rem;
    }
}
</style>