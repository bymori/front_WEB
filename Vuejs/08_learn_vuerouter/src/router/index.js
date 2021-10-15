/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-15 11:35:49
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 14:47:47
 */
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

// import Home from '../pages/Home.vue';
// import About from '../pages/About.vue';

// 配置映射关系
const routes = [
  //  redirect  重定向
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    home: 'home',
    component: () =>
      import(/* webpackChunkName: "home-chunk" */ '../pages/Home.vue'),
    mate: {
      name: 'momo',
      age: 19,
      height: 1.86,
    },
    children: [
      { path: '', redirect: '/home/message' },
      { path: 'message', component: () => import('../pages/HomeMessage.vue') },
      { path: 'shops', component: () => import('../pages/HomeShops.vue') },
    ],
  },
  {
    path: '/about',
    home: 'about',
    component: () =>
      import(/* webpackChunkName: "about-chunk" */ '../pages/About.vue'),
  },
  {
    path: '/user/:username/id/:id',
    home: 'user',
    component: () => import('../pages/User.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../pages/NotFound.vue'),
  },
];

// 创建一个路由对象router
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
