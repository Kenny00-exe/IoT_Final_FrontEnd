import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Register from "@/components/Register";

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
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/loginView')
  },
  {
    path:'/Register',
    name:'Register',
    component: () => import('@/views/registerView')
  }
]

const router = new Router({
  routes: routes
})

export default router
