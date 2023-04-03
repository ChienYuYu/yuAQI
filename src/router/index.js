import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'AQI',
      component: () => import('../views/AQIView.vue')
    },
    {
      path: '/AQI_history',
      name: 'AQI_history',
      component: () => import('../views/AQIHistory.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue')
    }
  ]
})

export default router
