import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/yszc.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/yszc'
    },
    {
      path: '/yszc',
      name: 'yszc',
      component: HomeView
    },
    {
      path: '/yhxy',
      name: 'yhxy',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/yhxy.vue')
    }
  ]
})

export default router
