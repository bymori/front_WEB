/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-15 18:14:00
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 00:04:15
 */
import { createStore } from 'vuex';
import home from './modules/home';
import user from './modules/user';

const store = createStore({
  state() {
    return {
      rootCounter: 100,
    };
  },
  getters: {
    doubleRootCounter(state) {
      return state.rootCounter * 2;
    },
  },
  mutations: {
    increment(state) {
      state.rootCounter++;
    },
  },
  modules: {
    home,
    user,
  },
});

export default store;
