/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 23:54:09
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 23:58:24
 */
function foo() {
  console.log(this);
}

foo.apply('abc');
foo.apply({});

// call / apply / bind ： 当传入 null / undefined 时，自动将this绑定成全局对象
foo.call(null); // Window
foo.apply(undefined); // Window

var bar = foo.bind(null);
bar(); // Window
