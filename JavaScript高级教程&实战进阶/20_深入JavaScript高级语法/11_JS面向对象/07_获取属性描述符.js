/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 22:22:17
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 22:26:20
 */

var obj = {
  _age: 18,
  _eating: function () {},
};

Object.defineProperties(obj, {
  name: {
    value: 'ioinn',
    configurable: true,
    enumerable: true,
    writable: true,
  },
  age: {
    configurable: true,
    enumerable: true,
    get: function () {
      return this._age;
    },
    set: function (value) {
      this._age = value;
    },
  },
});

// 获取某一个特定属性的属性描述符
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
console.log(Object.getOwnPropertyDescriptor(obj, 'age'));

// 获取对象的所有属性描述符
console.log(Object.getOwnPropertyDescriptors(obj));
