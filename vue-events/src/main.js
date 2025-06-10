import { createApp } from 'vue'


import App from './App.vue'
import router from './router'
import '@/assets/main.scss'
import pinia from '@/stores/index'

const app = createApp(App)

const pinia = createPinia()
app.use(router)

app.mount('#app')
