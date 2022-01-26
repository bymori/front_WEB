/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 11:39:21
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-26 21:55:44
 */
import { createStore } from 'vuex'

import app from './modules/app'
import getters from './getters'

export default createStore({
  modules: {
    app
  },
  getters
})
