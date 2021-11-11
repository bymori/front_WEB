/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 22:36:13
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 22:36:14
 */
const names = ['abc', 'cba', 'nba'];
const name = 'momo';
const info = { name: 'momo', age: 18 };

// 1.函数调用时
function foo(x, y, z) {
  console.log(x, y, z);
}

// foo.apply(null, names)
foo(...names);
foo(...name);

// 2.构造数组时
const newNames = [...names, ...name];
console.log(newNames);

// 3.构建对象字面量时ES2018(ES9)
const obj = { ...info, address: '上海', ...names };
console.log(obj);
