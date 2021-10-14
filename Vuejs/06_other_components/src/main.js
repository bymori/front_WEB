/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-14 00:40:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 15:12:25
 */
import { createApp } from 'vue';
import App from './04_teleport内置组件/App.vue';

import registerDirectives from './directives';

const app = createApp(App);

registerDirectives(app);

// 自定义全局指令
// app.directive('focus', {
//   mounted(el, bindings, vnode, preVnode) {
//     console.log('focus mounted');
//     el.focus();
//   },
// });

app.mount('#app');
