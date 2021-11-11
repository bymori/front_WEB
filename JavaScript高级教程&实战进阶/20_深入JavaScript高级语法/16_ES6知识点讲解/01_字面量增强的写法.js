/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 16:45:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 16:53:36
 */
var name = 'ioinn';
var age = 18;

var obj = {
  // 1.property shorthand (属性的简写)
  name,
  age,

  // 2.method shorthand (方法的简写)
  foo: function () {
    console.log(this);
  },
  bar() {
    console.log(this);
  },

  baz: () => {
    console.log(this);
  },

  // 3.computed property name (计算属性名)
  [name + 123]: 'hehehehe',
};

obj.baz();
obj.bar();
obj.foo();

// obj[name + 123] = "hahaha"
console.log(obj);
