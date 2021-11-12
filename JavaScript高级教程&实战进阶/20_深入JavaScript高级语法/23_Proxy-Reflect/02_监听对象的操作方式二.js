/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 18:17:59
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 18:45:11
 */
const obj = {
  name: 'momo',
  age: 18,
};

const objProxy = new Proxy(obj, {
  // 获取值时的捕获器
  get: function (target, key, receiver) {
    console.log(`监听到对象的${key}属性被访问了`, target);
    return target[key];
  },

  // 设置值时的捕获器
  set: function (target, key, newValue, receiver) {
    console.log(`监听到对象的${key}属性被设置值`, target);
    target[key] = newValue;
  },
});

console.log(objProxy.name);
console.log(objProxy.age);

objProxy.name = 'mori';
objProxy.age = 30;

console.log(obj.name);
console.log(obj.age);
