/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-14 00:40:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 13:10:07
 */
import { createApp } from 'vue';
import App from './03_自定义指令/App.vue';

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
