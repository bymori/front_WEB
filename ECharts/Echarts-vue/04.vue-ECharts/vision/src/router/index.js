/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-01 17:27:53
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-02 14:12:25
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import MmPage from '@/views/MmPage'
import SellerPage from '@/views/SellerPage';
import TrendPage from '@/views/TrendPage';
import MapPage from '@/views/MapPage'
import RankPage from '@/views/RankPage'
import HotPage from '@/views/HotPage'
import StockPage from '@/views/StockPage'

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
  {
    path: '/hotpage',
    component: HotPage,
  },
  {
    path: '/stockpage',
    component: StockPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
