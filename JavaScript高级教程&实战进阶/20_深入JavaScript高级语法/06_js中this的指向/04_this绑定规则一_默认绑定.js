/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 21:12:18
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 21:31:46
 */

// 一
// function foo() {
//   console.log(this);
// }
// foo();

// 二
// function foo1() {
//   console.log(this);
// }
// function foo2() {
//   console.log(this);
//   foo1();
// }
// function foo3() {
//   console.log(this);
//   foo2();
// }
// foo3();

// 三
// var obj = {
//   name: 'ioinn',
//   foo: function () {
//     console.log(this);
//   },
// };
// var bar = obj.foo;
// bar(); // Window

// 四
// function foo() {
//   console.log(this);
// }
// var obj = {
//   name: 'ioinn',
//   foo: foo,
// };
// var bar = obj.foo;
// bar(); // Window

// 五
function foo() {
  function bar() {
    console.log(this);
  }
  return bar;
}
var fn = foo();
fn(); // Window

var obj = {
  name: 'ioinn',
  eating: fn,
};
obj.eating(); // 隐式绑定  {name: 'ioinn', eating: ƒ}
