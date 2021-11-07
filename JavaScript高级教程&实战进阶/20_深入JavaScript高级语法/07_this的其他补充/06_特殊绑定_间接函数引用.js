/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 23:59:53
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-08 00:01:33
 */
var obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this);
  },
};

var obj2 = {
  name: 'obj2',
};

// obj2.bar = obj1.foo;
// obj2.bar();

(obj2.bar = obj1.foo)();
