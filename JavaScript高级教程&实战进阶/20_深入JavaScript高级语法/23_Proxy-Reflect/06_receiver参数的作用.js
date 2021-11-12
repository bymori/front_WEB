/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 20:19:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 20:31:54
 */
const obj = {
  _name: 'momo',
  get name() {
    return this._name;
  },
  set name(newValue) {
    this._name = newValue;
  },
};

const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    // receiver是创建出来的代理对象
    console.log('get方法被访问--------', key, receiver);
    console.log(receiver === objProxy);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    console.log('set方法被访问--------', key);
    Reflect.set(target, key, newValue, receiver);
  },
});

// console.log(objProxy.name);
objProxy.name = 'kobe';
