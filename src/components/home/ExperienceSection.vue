<template>
    <section ref="experienceSection" id="experience"
        class="py-20 px-4 md:px-8 lg:px-16 overflow-hidden rounded-lg shadow-xl">

        <div class="max-w-7xl mx-auto relative">
            <h2 :class="`${titleClass} text-center opacity-0 translate-y-10`" ref="headingElement">
                <div class="bg-gradient-to-r from-purple-500 via-indigo-600 to-cyan-400 bg-clip-text text-transparent">
                    {{ title }}
                </div>
                <span v-if="showUnderline"
                    class="absolute -translate-x-1/2 w-24 mt-1 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></span>
            </h2>

            <!-- Experience Timeline Container -->
            <div class="relative py-8">
                <!-- Main Continuous Vertical Timeline Line (Now within the projects container) -->
                <div class="my-14 absolute top-0 h-5/6 w-1 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full z-0 left-4 md:left-8 lg:left-16"
                    ref="timelineLineRef">
                </div>

                <div v-for="(experience, index) in experiences" :key="index"
                    class="relative mb-12 opacity-0 translate-y-10 w-full" :ref="el => experienceItemsRefs[index] = el">

                    <!-- Timeline Dot - Positioned absolutely relative to each project item -->
                    <div class="absolute w-6 h-6 bg-indigo-600 rounded-full z-10 border-2 border-white shadow-[0_0_0_2px_theme('colors.purple.600')] -translate-x-1/2"
                        :class="{ 'left-4': true, 'md:left-8': true, 'lg:left-16': true, 'top-[12px]': true }"
                        :ref="el => timelineDotsRefs[index] = el">
                    </div>

                    <!-- Content Block (Project Details) - No background, with padding for line/dot -->
                    <div
                        class="w-full p-6 rounded-xl transform transition-all duration-500 hover:scale-[1.02] pl-16 md:pl-20 lg:pl-24">
                        <h3 class="text-2xl font-bold mb-2">
                            {{ experience.title }}
                            <span v-if="experience.type" class="text-sm font-normal text-gray-400 ml-2">({{
                                experience.type }})</span>
                        </h3>
                        <p class="text-lg text-purple-400 mb-1 font-medium">{{ experience.company }}</p>
                        <p class="text-sm text-gray-400 mb-4">{{ experience.dates }}</p>
                        <p class="text-base leading-relaxed mb-4">
                            {{ experience.description }}
                        </p>
                        <ul class="list-disc pl-5 space-y-2 text-sm mb-4">
                            <li v-for="(detail, i) in experience.details" :key="i" class="leading-relaxed">{{ detail }}
                            </li>
                        </ul>
                        <div v-if="experience.technologies && experience.technologies.length > 0" class="mt-4">
                            <p class="text-sm font-semibold text-gray-300 mb-2">Technologies Used:</p>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="tech in experience.technologies" :key="tech"
                                    class="px-3 py-1 text-xs font-medium bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                        <!-- <div class="mt-6">
                            <div
                                class="inline-block bg-purple-600 hover:bg-indigo-600 font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-75">
                                View Project
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block ml-2 -mt-0.5"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>

            <div v-if="showCta" class="text-center bg-gray-800 p-8 rounded-xl opacity-0 translate-y-10"
                ref="ctaElement">
                <h3 class="text-3xl font-bold text-purple-400 mb-4">Ready to collaborate?</h3>
                <p class="text-lg mb-6 leading-relaxed">
                    My professional journey is a testament to continuous learning and problem-solving. I thrive on
                    challenges and am always eager to apply my skills to innovative projects. Let's build something
                    amazing together!
                </p>
                <RouterLink to="/contact"
                    class="inline-block bg-indigo-600 hover:bg-purple-600 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-75">
                    Get in Touch
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { RouterLink } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useExperienceStore } from '@/stores/experienceStore'

defineProps({
    title: {
        type: String,
        default: 'My Professional Journey'
    },
    titleClass: {
        type: String,
        default: 'text-4xl md:text-5xl font-extrabold mb-16'
    },
    showCta: {
        type: Boolean,
        default: true
    },
    showUnderline: {
        type: Boolean,
        default: true
    }
})

gsap.registerPlugin(ScrollTrigger)

const experienceSection = ref(null)
const headingElement = ref(null)
const experienceItemsRefs = ref([])
const ctaElement = ref(null)
const timelineDotsRefs = ref([])
const timelineLineRef = ref(null)

const { experiences } = useExperienceStore()

onMounted(async () => {
    await nextTick();

    gsap.fromTo(headingElement.value,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: headingElement.value,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        }
    );

    if (experienceItemsRefs.value.length > 0) {
        experienceItemsRefs.value.forEach((item, index) => {
            gsap.fromTo(item,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });

        // GSAP animation for the main continuous vertical line
        gsap.fromTo(timelineLineRef.value,
            { scaleY: 0, transformOrigin: 'top' },
            {
                scaleY: 1,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: experienceSection.value, // Keep trigger on overall section for initial reveal
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // GSAP animation for the timeline dots
        gsap.fromTo(timelineDotsRefs.value,
            { opacity: 0, scale: 0 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                stagger: 0.3,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: experienceSection.value, // Keep trigger on overall section for initial reveal
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }

    gsap.fromTo(ctaElement.value,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: ctaElement.value,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        }
    );
});
</script>