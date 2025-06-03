import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
const app =createApp(App)
app.use(pinia.use(persist))
app.mount("#app")
