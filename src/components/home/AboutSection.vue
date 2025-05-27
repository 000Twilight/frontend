<template>
    <section ref="aboutSection" id="about" class="py-20 px-3 overflow-hidden">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div ref="imageRef" class="flex-shrink-0">
                <img src="@/assets/profile.png" alt="Profile Photo"
                    class="w-64 h-64 object-cover rounded-2xl shadow-lg" />
            </div>

            <div ref="textRef" class="flex-1 space-y-6">
                <h2 class="text-3xl md:text-4xl font-bold text-primary">About Me</h2>

                <p class="text-lg text-muted leading-relaxed">
                    I'm Mario Richie Lim, a passionate
                    <span class="text-secondary">Full Stack Developer</span> focused on building scalable applications and
                    delivering exceptional user experiences.
                </p>

                <p class="text-lg text-muted leading-relaxed">
                    With a keen eye for design and a solid technical foundation, I create products that not only look
                    great but
                    also perform seamlessly across all platforms.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const aboutSection = ref(null)
const imageRef = ref(null)
const textRef = ref(null)

onMounted(async () => {
    await nextTick()

    // Animate image
    gsap.from(imageRef.value, {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: aboutSection.value,
            start: 'top 80%',
        },
    })

    // Animate text
    gsap.from(textRef.value, {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
            trigger: aboutSection.value,
            start: 'top 80%',
        },
    })
})
</script>