/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-01 17:27:53
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-01 18:38:25
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

// 请求基准路径的配置
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/';

// 将axios挂载到Vue的原型对象上
// 在别的组件中 this.$http
Vue.prototype.$http = axios;

// 将全局的echarts对象挂载到Vue的原型对象上
// 别的组件中 this.$echarts
Vue.prototype.$echarts = window.echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
