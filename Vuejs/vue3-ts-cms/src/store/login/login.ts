/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-18 22:36:31
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-18 22:50:50
 */
import { Module } from 'vuex'

import { ILoginState } from '@/store/login/type'
import { IRootState } from '@/store/type'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {},
  getters: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('执行accountLoginAction', payload)
    }
  }
}

export default loginModule
