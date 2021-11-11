/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 20:54:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 20:54:44
 */
// ES6之前拼接字符串和其他标识符
const name = 'ioinn';
const age = 18;
const height = 1.88;

// console.log('my name is ' + name + ', age is ' + age + ', height is ' + height);

// ES6提供模板字符串 ``
const message = `my name is ${name}, age is ${age}, height is ${height}`;
console.log(message);

const info = `age double is ${age * 2}`;
console.log(info);

function doubleAge() {
  return age * 2;
}

const info2 = `double age is ${doubleAge()}`;
console.log(info2);
