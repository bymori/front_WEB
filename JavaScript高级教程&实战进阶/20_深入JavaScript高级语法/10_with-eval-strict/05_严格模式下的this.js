/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 20:17:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 20:28:53
 */
'use strict';

// 在严格模式下, 自执行函数(默认绑定)会指向undefined
function foo() {
  console.log(this);
}
foo(); // undefined

var obj = {
  name: 'ioinn',
  foo: foo,
};
obj.foo(); // {name: 'ioinn', foo: ƒ}

var bar = obj.foo;
bar(); // undefined

// setTimeout 的 this
// 实现 fn.apply(this = window)
setTimeout(() => {
  console.log(this); // Window
}, 1000);
