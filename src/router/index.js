import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

// publicPath: process.env.NODE_ENV === 'prod' ? '/': '',
let url;
const router = createRouter({
    history: createWebHistory(process.env.NODE_ENV === 'prod' ? '/' : ''),
    routes
});

export default router;