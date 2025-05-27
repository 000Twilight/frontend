<template>
  <!-- <div v-if="showSplash">
    <transition name="fade">
      <SplashView />
    </transition>
  </div> -->

  <transition name="fade">
    <div>
      <!-- <div v-else> -->
      <router-view />
    </div>
  </transition>
</template>

<script setup>
import './styles/main.css'
import { ref, onMounted } from 'vue'
import SplashView from './views/SplashView.vue'

const showSplash = ref(true)

// onMounted(() => {
//   setTimeout(() => {
//     showSplash.value = false
//   }, 3500)
// })
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>