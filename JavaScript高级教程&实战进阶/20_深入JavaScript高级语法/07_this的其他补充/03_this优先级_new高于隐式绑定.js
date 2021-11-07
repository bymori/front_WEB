/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 23:39:26
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 23:42:04
 */
var obj = {
  name: 'obj',
  foo: function () {
    console.log(this);
  },
};

// new 的优先级高于隐式绑定
var f = new obj.foo();
