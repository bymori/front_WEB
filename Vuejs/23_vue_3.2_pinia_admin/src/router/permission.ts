/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-29 23:03:01
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-29 23:13:17
 */
import router from './index';
import { useLoginStore } from '@/store/login';

const useLogin = useLoginStore();
const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
  console.log(useLogin.getToken);

  if (useLogin.getToken) {
    if (to.path === '/login') {
      next('/');
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next('/login');
    }
  }
});
