/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-09 23:52:18
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-10 00:07:57
 */
// ES module导入 cjs导出 通过webpack打包可以运行
// import { name, age } from './foo';
// console.log(name, age);

// Commonjs导入 ES module导出 通过webpack打包可以运行
const bar = require('./bar');
console.log(bar.name, bar.age);
