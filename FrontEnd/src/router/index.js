import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Register from "@/components/Register";

Vue.use(Router)

const routes = [
  {
    path: '/china',
    name: 'China',
    component: () => import('@/views/main-layout')
  },
  {
    path: '/world',
    name: 'World',
    component: () => import('@/views/world')
  },
  {

      path: '/',
      name: 'Login',
      component:()=> import('../views/Login')
    },
    {
      path:'/Register',
      name:'Register',
      component:()=> import('../views/Register')
    }

]

const router = new Router({
  routes: routes
})

export default router
