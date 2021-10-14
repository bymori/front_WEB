/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-14 00:40:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 15:32:35
 */
import { createApp } from 'vue';
import App from './03_自定义指令/App.vue';

import registerDirectives from './directives';

import plugins_object from './plugins/plugins_object';
import plugins_function from './plugins/plugins_function';
const app = createApp(App);

registerDirectives(app);

app.use(plugins_object);
app.use(plugins_function);

// 自定义全局指令
// app.directive('focus', {
//   mounted(el, bindings, vnode, preVnode) {
//     console.log('focus mounted');
//     el.focus();
//   },
// });

app.mount('#app');
