/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-19 21:18:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-19 21:58:20
 */
import Vue from 'vue'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select, Row, Radio } from 'element-ui'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Select)
Vue.use(Row)
Vue.use(Radio)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
