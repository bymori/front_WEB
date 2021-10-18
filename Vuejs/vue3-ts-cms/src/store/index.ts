/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-17 20:01:28
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-18 22:45:34
 */
import { createStore } from 'vuex'

import login from './login/login'

import { IRootState } from '@/store/type'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'ioinn',
      age: 20
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export default store
