/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 22:07:50
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 22:24:26
 */
var obj = {
  // 私有属性(js里面是没有严格意义的私有属性)
  _age: 18,
  _eating: function () {},

  get age() {
    return this._age;
  },
  set age(value) {
    this._age = value;
  },
};

/**
 * Object.defineProperties(obj, props)
 * 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
 */
Object.defineProperties(obj, {
  name: {
    value: 'ioinn',
    configurable: true,
    enumerable: true,
    writable: true,
  },
  //   age: {
  //     configurable: true,
  //     enumerable: true,
  //     get: function () {
  //       return this._age;
  //     },
  //     set: function (value) {
  //       this._age = value;
  //     },
  //   },
});

obj.age = 19;
console.log(obj);
console.log(obj.age);
