/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 19:25:03
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 19:27:27
 */
function foo() {
  var name = 'foo';
  var age = 18;

  function bar() {
    console.log(name);
    console.log(age);
  }

  return bar;
}

var fn = foo();
fn();

fn = null;

// fn();
// fn();
// fn();
