/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 11:39:21
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-26 16:14:44
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'

createApp(App).use(store).use(router).mount('#app')
