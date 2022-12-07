import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'China',
    component: () => import('@/views/main-layout')
  },
  {
    path: '/world',
    name: 'World',
    component: () => import('@/views/world')
  },
]

const router = new Router({
  routes: routes
})

export default router
