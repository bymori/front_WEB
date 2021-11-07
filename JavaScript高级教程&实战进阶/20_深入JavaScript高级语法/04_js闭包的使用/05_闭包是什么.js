/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 18:13:26
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 18:51:17
 */
function foo() {
  var name = 'foo';
  function bar() {
    console.log('bar', name);
  }

  return bar;
}

var fn = foo();
fn();

var name = 'ioinn';
function fun() {
  console.log(name);
}

// 可以访问: test就是闭包
// 有访问到: test不是闭包
function test() {}
