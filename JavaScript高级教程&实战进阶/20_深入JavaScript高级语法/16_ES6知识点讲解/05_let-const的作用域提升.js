/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 19:05:19
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 19:20:10
 */

// console.log(foo);
// var foo = 'foo';

// Reference(引用)Error: Cannot access 'foo' before initialization(初始化)
// let/const他们是没有作用域提升
// foo被创建出来了, 但是不能被访问
// 作用域提升: 能提前被访问
console.log(foo);
let foo = 'foo';
