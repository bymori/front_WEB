/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-01 17:27:53
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-02 11:11:23
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import MmPage from '@/views/MmPage'
import SellerPage from '@/views/SellerPage';
import TrendPage from '@/views/TrendPage';
import MapPage from '@/views/MapPage'
import RankPage from '@/views/RankPage'

Vue.use(VueRouter);

const routes = [
  {
    path: '/mm',
    component: MmPage,
  },
  {
    path: '/sellerpage',
    component: SellerPage,
  },
  {
    path: '/trendpage',
    component: TrendPage,
  },
  {
    path: '/mappage',
    component: MapPage,
  },
  {
    path: '/rankpage',
    component: RankPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
