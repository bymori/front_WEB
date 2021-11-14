/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-14 01:00:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-14 09:58:19
 */
// 编写的一个迭代器
// const iterator = {
//   next: function () {
//     return { done: true, value: 123 };
//   },
// };

// 数组
const names = ['abc', 'cba', 'nba'];

// 创建一个迭代器对象来访问数组
let index = 0;

const namesIterator = {
  next: function () {
    // return { done: false, value: 'abc' };
    // return { done: false, value: 'cba' };
    // return { done: false, value: 'nba' };
    // return { done: true, value: undefined };

    if (index < names.length) {
      return { done: false, value: names[index++] };
    } else {
      return { done: true, value: undefined };
    }
  },
};

console.log(namesIterator.next()); // { done: false, value: 'abc' }
console.log(namesIterator.next()); // { done: false, value: 'cba' }
console.log(namesIterator.next()); // { done: false, value: 'nba' }
console.log(namesIterator.next()); // { done: true, value: undefined }
console.log(namesIterator.next()); // { done: true, value: undefined }
