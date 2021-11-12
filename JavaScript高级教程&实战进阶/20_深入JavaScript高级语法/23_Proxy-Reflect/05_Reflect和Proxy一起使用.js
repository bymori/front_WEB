/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 19:06:58
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 19:06:58
 */
const obj = {
  name: 'momo',
  age: 18,
};

const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    console.log('get---------');
    return Reflect.get(target, key);
  },
  set: function (target, key, newValue, receiver) {
    console.log('set---------');
    target[key] = newValue;

    const result = Reflect.set(target, key, newValue);
    if (result) {
    } else {
    }
  },
});

objProxy.name = 'mori';
console.log(objProxy.name);
