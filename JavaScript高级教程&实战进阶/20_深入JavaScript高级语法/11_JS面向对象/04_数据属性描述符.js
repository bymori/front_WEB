/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 21:24:18
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 21:44:47
 */

/**
 * name 和 age 虽然没有使用属性描述符来定义, 但是它们也是具备对应的特性的
 *  value: 赋值的value
 *  configurable: true
 *  enumerable: true
 *  writable: true
 */

var obj = {
  name: 'momo',
  age: 40,
};
// 数据属性描述符
Object.defineProperty(obj, 'address', {
  // ...
  value: '北京市', // 默认值 undefined
  // 该属性不可删除 / 也不可以重新定义属性描述符
  configurable: false, // 默认值 false
  // 该属性是配置对应的属性(address) 是否可以枚举
  enumerable: true, // 默认值 false
  // 该特性是属性 是否可以赋值(写入值)
  writable: false, // 默认值 false
});

// 测试 configurable
// delete obj.name;
// console.log(obj.name);
// delete obj.address;
// console.log(obj.address);

// Object.defineProperty(obj, 'address', {
//   value: '上海市',
//   configurable: true,
// });

// 测试 enumerable
// console.log(obj);
// for (var key in obj) {
//   console.log(key);
// }
// console.log(Object.keys(obj));

// 测试 writable
obj.address = '上海市';
console.log(obj.address);
