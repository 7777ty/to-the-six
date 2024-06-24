import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/yszc.vue'
import yhxy from '../views/yhxy.vue'

const router = createRouter({
  history: createWebHistory('/docs'),
  routes: [
    {
      path: '/',
      redirect:'/yszc'
    },
    {
      path: '/yszc',
      name: 'yszc',
      title:'隐私政策',
      component: HomeView
    },
    {
      path: '/yhxy',
      name: 'yhxy',
      title:'用户协议',
      component: yhxy

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/yhxy.vue')
    }
  ]
})

export default router
