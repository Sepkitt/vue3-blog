import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    name: 'Home',
    component: Home
  },
  {
    path: '/options-api',
    name: 'Options API',
    component: () => import(/* webpackChunkName: "about" */ '../views/OptionsAPI.vue')

  },
  {
    path: '/composition-api',
    name: 'Composition API',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CompositionAPI.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
