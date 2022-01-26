/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 11:39:21
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-26 22:54:53
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  },
  {
    path: '/',
    name: '/',
    component: () => import('../layout'),
    redirect: '/users',
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/users/index.vue')
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('@/views/categories/index.vue')
      },
      {
        path: 'goods',
        name: 'goods',
        component: () => import('@/views/goods/index.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/orders/index.vue')
      },
      {
        path: 'params',
        name: 'params',
        component: () => import('@/views/params/index.vue')
      },
      {
        path: 'reports',
        name: 'reports',
        component: () => import('@/views/reports/index.vue')
      },
      {
        path: 'rights',
        name: 'rights',
        component: () => import('@/views/rights/index.vue')
      },
      {
        path: 'roles',
        name: 'roles',
        component: () => import('@/views/roles/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
