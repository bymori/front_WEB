/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-15 11:35:49
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 11:41:59
 */
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';

// 配置映射关系
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
];

// 创建一个路由对象router
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
