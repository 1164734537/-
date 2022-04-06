import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/style/tailwind.css'
import { Icon } from '@vicons/utils'
import 'animate.css';

const app = createApp(App)
app
.component('Icon', Icon)
.use(router)
.mount('#app')
