<template>
    <section class="min-h-screen flex items-center justify-center px-4 pt-26 pb-10 bg-bg text-text">
        <div ref="formContainer" class="w-full max-w-2xl backdrop-blur-xl rounded-3xl p-10 shadow-lg">
            <h2
                class="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-500 via-indigo-600 to-cyan-400 bg-clip-text text-transparent">
                Let's Work Together
            </h2>
            <p class="text-center mb-10">
                Have an idea or project in mind? Reach out and let’s make it happen!
            </p>

            <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="input-group">
                        <label class="block text-sm mb-2">Name</label>
                        <input v-model="form.name" type="text" placeholder="Your name" required
                            class="input-focus w-full px-4 py-3 rounded-xl text-text bg-transparent border border-[var(--color-muted)] transition duration-300" />
                    </div>

                    <div class="input-group">
                        <label class="block text-sm mb-2">Email</label>
                        <input v-model="form.email" type="email" placeholder="you@email.com" required
                            class="input-focus w-full px-4 py-3 rounded-xl text-text bg-transparent border border-[var(--color-muted)] transition duration-300" />
                    </div>
                </div>

                <div class="input-group">
                    <label class="block text-sm mb-2">Message</label>
                    <textarea v-model="form.message" rows="5" placeholder="Tell me more..." required
                        class="input-focus w-full px-4 py-3 rounded-xl text-text bg-transparent border border-[var(--color-muted)] transition duration-300 resize-none"></textarea>
                </div>

                <button type="submit"
                    class="cursor-pointer w-full bg-gradient-to-r from-primary to-secondary font-semibold py-3 px-6 rounded-xl shadow-md hover:scale-[1.02] transition duration-300">
                    Send Message 🚀
                </button>
            </form>
        </div>

        <div v-if="submitMessage" ref="popup"
            class="text-slate-900 fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div class="rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl"
                :class="submitStatus === 'success' ? 'bg-success' : 'bg-warning'">
                <p class="text-xl font-semibold">{{ submitMessage }}</p>
                <button @click="closePopup"
                    class="cursor-pointer mt-4 bg-bg text-text py-2 px-4 rounded-xl hover:opacity-90 transition">
                    Close
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

const form = ref({ name: '', email: '', message: '' })
const submitStatus = ref('')
const submitMessage = ref('')
const formContainer = ref(null)
const popup = ref(null)

const handleSubmit = async () => {
    try {
        submitStatus.value = 'success'
        submitMessage.value = '🎉 Message sent! I’ll get back to you soon.'
        form.value = { name: '', email: '', message: '' }

        await nextTick()
        gsap.fromTo(
            popup.value,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
        )
    } catch {
        submitStatus.value = 'error'
        submitMessage.value = '⚠️ Error sending message. Please try again.'

        await nextTick()
        gsap.fromTo(
            popup.value,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
        )
    }
}

const closePopup = () => {
    gsap.to(popup.value, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: 'power3.in',
        onComplete: () => {
            submitMessage.value = ''
        },
    })
}

onMounted(() => {
    gsap.from(formContainer.value, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
    })
})
</script>

<style scoped>
.input-group label {
    color: var(--color-muted);
    transition: color 0.3s ease;
}

.input-group:focus-within label {
    color: var(--color-primary);
}

.input-focus::placeholder {
    color: var(--color-muted);
    transition: color 0.3s ease;
}

.input-focus:focus {
    background-color: rgba(139, 92, 246, 0.1);
    box-shadow:
        0 0 0 3px rgba(139, 92, 246, 0.5),
        0 0 10px rgba(216, 180, 254, 0.3);
    outline: none;
    border-color: rgba(216, 180, 254, 0.6);
}

.input-focus:focus::placeholder {
    color: var(--color-primary);
}
</style>