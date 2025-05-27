import './styles/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueTilt from 'vue-tilt.js'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueTilt)
app.use(createPinia())
app.use(router)

app.mount('#app')