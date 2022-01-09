/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-09 16:54:35
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-09 17:15:18
 */
// import { name, age, foo } from './foo.js';
// console.log(name);

// import函数返回的结果是一个Promise
import('./foo.js').then((res) => {
  console.log('res:', res.name);
});

console.log('后续的代码不会运行');

// ES11新增的特性
//  会返回一个对象，有一个 url 属性，返回当前模块的url路径，只能在模块内部使用。
// 因为 import.meta 必须要在模块内部使用，如果不加 type=“module”，控制台会报错：Cannot use ‘import.meta’ outside a module。
// meta属性本身也是一个对象: { url : '当前模块所在的路径  http://127.0.0.1:5500/30_JS模块化/05_ESModule/05_import函数/index.html'}
console.log(import.meta);
