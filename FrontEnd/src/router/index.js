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
  {
    path: '/publish',
    name: 'Publish',
    component: () => import('@/views/publishView')
  },
  {
    path: '/subscribe',
    name: 'Subscribe',
    component: () => import('@/views/subscribeView')
  },
]

const router = new Router({
  routes: routes
})

export default router
