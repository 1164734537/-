import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/tailwind.css'
import { Icon } from '@vicons/utils'
import 'animate.css';

const app = createApp(App)
app
.component('Icon', Icon)
.use(store)
.use(router)
.mount('#app')
