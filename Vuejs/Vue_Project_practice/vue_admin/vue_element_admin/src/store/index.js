/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-19 21:18:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-19 23:41:26
 */
import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tab
  }
})
