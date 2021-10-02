/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-01 17:27:53
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-02 19:26:21
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import ScreenPage from '@/views/ScreenPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/screen',
  },
  {
    path: '/screen',
    component: ScreenPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
