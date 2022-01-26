/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 21:24:42
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-26 21:42:50
 */
import { login as loginApi } from '@/api/login'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
    login({ commit }, useInfo) {
      return new Promise((resolve, reject) => {
        loginApi(useInfo)
          .then((res) => {
            commit('setToken', res.token)
            router.replace('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  },
  modules: {}
}
