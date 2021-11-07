/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 20:23:20
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 20:27:10
 */
function foo() {
  var name = 'ioinn';
  var age = 18;

  function bar() {
    console.log(name);
  }

  return bar;
}

var fn = foo();
fn();
