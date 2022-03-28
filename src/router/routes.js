const routes = [
    // 首页
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home/Home.vue')
    }
]

export { routes };