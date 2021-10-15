/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-15 18:14:00
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 19:08:20
 */
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: 100,
      name: 'ioinn',
      age: 19,
      height: 1.88,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

export default store;
