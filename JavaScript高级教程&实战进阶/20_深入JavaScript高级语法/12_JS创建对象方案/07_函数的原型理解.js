/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 01:15:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 01:21:22
 */
function foo() {}

// 函数也是一个对象
// console.log(foo.__proto__); // 函数作为对象来说, 它也是有 [[prototype]] 隐式原型

// 函数因为是一个函数, 所有它还会多出一个显示原型属性: prototype
console.log(foo.prototype);

var f1 = new foo();
var f2 = new foo();

console.log(f1.__proto__ === foo.prototype);
console.log(f2.__proto__ === foo.prototype);
