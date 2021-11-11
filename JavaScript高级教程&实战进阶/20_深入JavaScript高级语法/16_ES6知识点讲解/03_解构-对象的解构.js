/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 17:09:08
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 17:09:08
 */
var obj = {
  name: 'ioinn',
  age: 18,
  height: 1.88,
};

// 对象的解构: {}
var { name, age, height } = obj;
console.log(name, age, height);

var { age } = obj;
console.log(age);

var { name: newName } = obj;
console.log(newName);

var { address: newAddress = '上海' } = obj;
console.log(newAddress);

function foo(info) {
  console.log(info.name, info.age);
}

foo(obj);

function bar({ name, age }) {
  console.log(name, age);
}

bar(obj);
