/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 22:28:45
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 22:38:30
 */
var obj = {
  name: 'momo',
  age: 20,
};

// 1. 禁止对象继续添加新的属性
Object.preventExtensions(obj);

obj.height = 1.8;
obj.address = '上海市';

console.log(obj);

// 2. 禁止对象配置 / 删除里面的属性
// for (var key in obj) {
//   Object.defineProperty(obj, key, {
//     value: obj[key],
//     configurable: false,
//     enumerable: true,
//     writable: false,
//   });
// }

Object.seal(obj);

delete obj.name;
console.log(obj.name);

// 3. 让属性不可以修改 (writable: false)
Object.freeze(obj);

obj.name = 'ioinn';
console.log(obj.name);
