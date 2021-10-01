/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-01 17:27:53
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-01 18:53:40
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import SellerPage from '@/views/SellerPage';
import TrendPage from '@/views/TrendPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/sellerpage',
    component: SellerPage,
  },
  {
    path: '/trendpage',
    component: TrendPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
