/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 20:07:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 20:27:42
 */
var obj = {
  name: 'ioinn',
  age: 18,
};

var info = Object.create(obj, {
  address: {
    value: '上海',
    enumerable: true,
  },
});
console.log(info);
console.log(info.__proto__);

// hasOwnProperty方法判断
console.log(info.hasOwnProperty('address')); // true
console.log(info.hasOwnProperty('name')); // false

// in 操作符: 不管在当前对象还是原型中返回的都是true
console.log('address' in info); // true
console.log('name' in info); // true

// // for in
for (var key in info) {
  console.log('for in: ', key);
}
