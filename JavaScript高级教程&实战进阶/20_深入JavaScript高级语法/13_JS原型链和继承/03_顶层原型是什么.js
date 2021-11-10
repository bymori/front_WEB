/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 16:48:07
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 16:50:35
 */
var obj = { name: 'ioinn' };

console.log(obj.address);

// 到底是找到哪一层对象之后停止继续查找了呢?
// 字面量对象obj的原型是 [Object: null prototype] {}
// [Object: null prototype] {} 就是顶层的原型

console.log(obj.__proto__);

// obj.__proto__ => [Object: null prototype] {}
console.log(obj.__proto__.__proto__); // null
