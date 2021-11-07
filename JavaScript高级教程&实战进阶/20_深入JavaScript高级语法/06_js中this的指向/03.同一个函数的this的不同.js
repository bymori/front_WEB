/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 21:03:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 21:10:13
 */
/**
 * this指向什么，跟函数所处的位置是没有关系的
 * 跟函数被调用的方式是有关系的
 */

function foo() {
  console.log(this);
}

// 1. 直接调用函数
foo(); // Window

// 2. 创建一个对象，对象中的函数指向foo
var obj = {
  name: 'ioinn',
  foo: foo,
};
obj.foo(); // {name: 'ioinn', foo: ƒ}

// 3. apply调用
foo.apply('abcd'); // String {'abcd'}
