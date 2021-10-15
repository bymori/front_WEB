/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-15 18:14:00
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 18:31:12
 */
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      rootCounter: 100,
    };
  },
  mutations: {
    increment(state) {
      state.rootCounter++;
    },
    decrement(state) {
      state.rootCounter--;
    },
  },
});

export default store;
