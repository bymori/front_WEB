/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 22:05:13
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 22:10:03
 */
function foo() {
  console.log(this);
}

// foo.call('aa');
// foo.call('aa');
// foo.call('aa');

// 默认绑定和显式绑定bind冲突：优先级(显式绑定)
var newFoo = foo.bind('aaa');
newFoo();
newFoo();
newFoo();
