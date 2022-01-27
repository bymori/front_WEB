/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 11:39:21
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-27 14:15:10
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import SvgIcon from '@/icons'
import 'element-plus/dist/index.css'
import '@/router/permission' // 路由守卫配置
import * as ELIcons from '@element-plus/icons-vue' // 使用图标
import i18n from '@/i18n'

const app = createApp(App)

for (const iconName in ELIcons) {
  app.component(iconName, ELIcons[iconName])
  // iconName 注册为全局组件
}

SvgIcon(app)
app.use(store).use(router).use(i18n).mount('#app')
