/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 17:57:10
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 18:07:38
 */
const obj = {
  name: 'momo',
  age: 18,
};

// Object.defineProperty(obj, 'name', {
//   get: function () {
//     console.log('监听到obj对象的name属性被访问了');
//   },
//   set: function () {
//     console.log('监听到obj对象的name属性被设置值');
//   },
// });

Object.keys(obj).forEach((key) => {
  let value = obj[key];

  Object.defineProperty(obj, key, {
    get: function () {
      console.log(`监听到obj对象的${key}属性被访问了`);
      return value;
    },
    set: function (newValue) {
      console.log(`监听到obj对象的${key}属性被设置值`);
      value = newValue;
    },
  });
});

obj.name = 'mori';
obj.age = 30;

console.log(obj.name);
console.log(obj.age);

obj.height = 1.88;
