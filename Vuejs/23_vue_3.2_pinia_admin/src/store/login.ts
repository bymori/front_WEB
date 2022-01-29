/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-29 20:03:41
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-29 20:53:40
 */
import { defineStore } from 'pinia';
import { login as loginApi } from '@/api/login';
import router from '@/router';

export const useLoginStore = defineStore('login', {
  actions: {
    login(useInfo: {}) {
      return new Promise((resolve, reject) => {
        loginApi(useInfo)
          .then((res) => {
            router.replace('/');
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
