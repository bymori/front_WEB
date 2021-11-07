/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 18:02:31
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 18:12:15
 */
function foo() {
  function bar() {
    console.log('bar');
  }

  return bar;
}

var fn = foo();
fn();
