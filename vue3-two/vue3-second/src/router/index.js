import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    redirect:'/cart'
  },
  {
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/foo',
    name:'foo',
    component:()=>import('../views/Foo.vue')
  },
  {
    path:'/cart',
    name:'cart',
    component:()=>import('../views/Cart.vue')
  },
  {
    path:'/watch',
    name:'watch',
    component:()=>import('../views/Watch.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
