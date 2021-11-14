/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-14 10:51:16
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-14 11:00:04
 */
// 1.for of 场景
// const names = ['abc', 'cba', 'nba'];
// for (const item of names) {
//   console.log(item);
// }

// 2.展开语法(spread syntax)
const iterableObj = {
  names: ['abc', 'cba', 'nba'],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] };
        } else {
          return { done: true, value: undefined };
        }
      },
    };
  },
};

const names = ['Nabc', 'Ncba', 'Nnba'];
const newNames = [...names, ...iterableObj];
console.log(newNames);

const obj = { name: 'ioinn', age: 18 };

// for (const item of obj) {
// }

// ES9(ES2018)中新增的一个特性: 用的不是迭代器
const newObj = { ...obj };
console.log(newObj);

// 3.解构语法
const [name1, name2] = names;
// const { name, age } = obj; //不一样的  ES9新增的特性

// 4.创建一些其他对象时
const set1 = new Set(iterableObj);
const set2 = new Set(names);

const arr1 = Array.from(iterableObj);

console.log('set1', set1);
console.log('set2', set2);
console.log('arr3', arr1);

// 5.Promise.all
Promise.all(iterableObj).then((res) => {
  console.log('Promise.all', res);
});
