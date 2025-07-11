<template>
    <section class="py-10 overflow-hidden" ref="skillsSection">
        <div class="mx-auto space-y-12">
            <h2 ref="titleRef" class="text-3xl md:text-4xl font-bold text-primary text-center">
                My Skill Set
            </h2>

            <div ref="marqueeContainer" class="overflow-hidden relative">
                <div ref="marqueeWrapper" class="flex whitespace-nowrap">
                    <div class="flex whitespace-nowrap">
                        <!-- Original list -->
                        <div v-for="(skill, index) in skills" :key="'first-' + index"
                            class="skill-item flex flex-col items-center justify-center space-y-3 mx-6">
                            <div :class="getWrapperClass(skill.name)">
                                <img :src="skill.image" :alt="skill.name" class="object-contain"
                                    :class="getImageClass(skill.name)" />
                            </div>
                            <p class="text-muted font-semibold text-center">{{ skill.name }}</p>
                        </div>

                        <!-- Duplicated list -->
                        <div v-for="(skill, index) in skills" :key="'second-' + index"
                            class="skill-item flex flex-col items-center justify-center space-y-3 mx-6">
                            <div :class="getWrapperClass(skill.name)">
                                <img :src="skill.image" :alt="skill.name" class="object-contain"
                                    :class="getImageClass(skill.name)" />
                            </div>
                            <p class="text-muted font-semibold text-center">{{ skill.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSkillsStore } from '@/stores/skillsStore'

gsap.registerPlugin(ScrollTrigger)

const skillsStore = useSkillsStore()
const skills = skillsStore.getSkills

const marqueeWrapper = ref(null)
const marqueeContainer = ref(null)
const skillsSection = ref(null)
const titleRef = ref(null)

// Utility functions for wrapper/image classes
const getWrapperClass = (name) => {
    return [
        'flex items-center justify-center',
        name === 'Git' || name === 'Expo'
            ? 'w-17 h-17 bg-white p-1 rounded-full'
            : 'w-16 h-16'
    ]
}

const getImageClass = (name) => {
    return name === 'Expo' || name === 'Figma' ? 'w-10 h-10' : 'max-w-full max-h-full'
}

onMounted(async () => {
    await nextTick()

    // Fade-in effect
    gsap.from([titleRef.value, marqueeContainer.value], {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: skillsSection.value,
            start: 'top 85%',
        }
    })

    // Seamless infinite scroll
    const wrapper = marqueeWrapper.value
    const inner = wrapper.firstElementChild
    const width = inner.scrollWidth / 2

    gsap.set(wrapper, { x: 0 })

    gsap.to(wrapper, {
        x: -width,
        duration: 30,
        ease: 'linear',
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % width)
        }
    })
})
</script>

<style scoped>
.skill-item img {
    transition: transform 0.3s ease-in-out;
}

.skill-item:hover img {
    transform: scale(1.1);
}
</style>
