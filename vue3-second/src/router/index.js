import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        // 重定向
        path: '/',
        redirect: '/foo'
    },
    {
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',

        component: () =>
            import ('../views/AboutView.vue')
    },
    {
        path: '/foo',
        name: 'foo',
        component: import ('../views/FooView.vue')
    },
    {
        path: '/Car',
        name: 'Car',
        component: () =>
            import ('../views/Car.vue')
    },
    {
        path: '/watch',
        name: 'watch',
        component: () =>
            import ('../views/Watch.vue')
    },
    {
        path: "/bar",
        name: "bar",
        component: () =>
            import ('../views/Bar.vue')
    },
    {
        path: "/card",
        name: "card",
        component: () =>
            import ('../views/Card.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router