/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-29 20:03:41
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-29 23:17:13
 */
import { defineStore } from 'pinia';
import { login as loginApi } from '@/api/login';
import router from '@/router';

export const useLoginStore = defineStore('login', {
  state: () => {
    return {
      token: localStorage.getItem('token') || '',
    };
  },
  getters: {
    getToken() {
      return true;
    },
  },
  actions: {
    setToken(token: any) {
      this.token = token;
      localStorage.setItem('token', token);
    },
    login(useInfo: {}) {
      return new Promise((resolve, reject) => {
        loginApi(useInfo)
          .then((res) => {
            this.setToken(res.token);
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
