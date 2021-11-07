/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 23:11:37
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 23:38:08
 */
// var obj = {
//   name: 'obj',
//   foo: function () {
//     console.log(this);
//   },
// };

// obj.foo();

// 1. call / apply 的显式绑定高于隐式绑定
// obj.foo.call('abc');
// obj.foo.apply('abc');

// 2. bind 的优先级高于隐式绑定
// var bar = obj.foo.bind('aaa');
// bar();

// 3. 明显比较
function foo() {
  console.log(this);
}
var obj = {
  name: 'obj',
  foo: foo.bind('aaa'),
};
obj.foo();
