/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 00:37:57
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 00:46:04
 */

const obj = { name: 'obj1' };

// 1.WeakMap和Map的区别二:
const map = new Map();
map.set(obj, 'aaa');

const weakMap = new WeakMap();
weakMap.set(obj, 'aaa');

// 2.区别一: 不能使用基本数据类型
// weakMap.set(1, 'ccc');

// 3.常见方法
// get方法
console.log(weakMap.get(obj)); // aaa

// has方法
console.log(weakMap.has(obj)); // true

// delete方法
console.log(weakMap.delete(obj)); // true
// WeakMap { <items unknown> }
console.log(weakMap); // WeakMap { <items unknown> }
