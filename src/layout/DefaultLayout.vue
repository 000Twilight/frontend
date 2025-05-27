<template>
    <div class="min-h-screen flex flex-col">
        <Navbar />
        <div class="flex-1 grid grid-cols-12">
            <div class="col-span-1">
                <SocialBar />
            </div>
            <div class="col-span-10"><router-view /></div>
            <div class="col-span-1"></div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import SocialBar from '../components/layout/SocialBar.vue'
</script>