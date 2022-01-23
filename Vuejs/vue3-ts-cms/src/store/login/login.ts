/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-18 22:36:31
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-23 15:17:45
 */
import { Module } from 'vuex'

import { accountLoginRequest } from '@/service/login/login'
import localCache from '@/utils/cache'

import { IAccount } from '@/service/login/type'
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
    async accountLoginAction({ commit }, payload: IAccount) {
      console.log('执行accountLoginAction', payload)

      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      console.log('aa', loginResult)

      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // const { id, token } = loginResult.data
      // commit('changeToken', token)
      // localCache.setCache('token', token)

      // 2.请求用户信息
      // 3.请求用户菜单
      // 4.跳到首页
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction', payload)
    }
  }
}

export default loginModule
