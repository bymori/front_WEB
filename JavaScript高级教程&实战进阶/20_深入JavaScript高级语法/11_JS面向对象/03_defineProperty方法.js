/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 21:14:53
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 21:24:06
 */
var obj = {
  name: 'momo',
  age: 40,
};

// 属性描述符是一个对象
Object.defineProperty(obj, 'height', {
  // ...
  value: 1.88,
  /**
   * 数据描述符
   *
   * 存取描述符
   */
});

console.log(obj);
console.log(obj.height);
