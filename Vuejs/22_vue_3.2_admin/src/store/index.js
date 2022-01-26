/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 11:39:21
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-26 21:38:39
 */
import { createStore } from 'vuex'

import app from './modules/app'

export default createStore({
  modules: {
    app
  }
})
