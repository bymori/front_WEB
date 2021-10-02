/*
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-01 17:27:53
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-02 23:29:30
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: 'chalk',
  },
  mutations: {
    changeTheme(state) {
      if (state.theme === 'chalk') {
        state.theme = 'vintage';
      } else {
        state.theme = 'chalk';
      }
    },
  },
  actions: {},
  modules: {},
});
