/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 23:45:12
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 23:51:57
 */
// 结论 new关键字 不能和 call / apply 一起使用

// new 的优先级高级bind
function foo() {
  console.log(this);
}

// var bar = foo.bind('aaa');

// var obj = new bar();

foo.bind('abc').call('def');

// new绑定 --> 显式绑定(call / apply / bind) --> 隐式绑定(obj.foo()) --> 默认绑定(独立函数绑定)
