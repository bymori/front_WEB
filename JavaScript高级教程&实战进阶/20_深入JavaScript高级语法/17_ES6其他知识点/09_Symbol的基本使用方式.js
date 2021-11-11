/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 22:57:49
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 23:08:22
 */
// 1.ES6之前, 对象的属性名(key)
// var obj = {
//   name: 'momo',
//   friend: { name: 'kobe' },
//   age: 18,
// };

// obj['newName'] = 'james';
// console.log(obj);

// 2.ES6中Symbol的基本使用
const s1 = Symbol();
const s2 = Symbol();

console.log(s1 === s2); // false

// ES2019(ES10)中, Symbol还有一个描述(description)
const s3 = Symbol('aaa');
console.log(s3.description);

// 3.Symbol值作为key
// 3.1. 在定义对象字面量时使用
const obj = {
  [s1]: 'abc',
  [s2]: 'cba',
};

// 3.2. 新增属性
obj[s3] = 'nba';

// 3.3. Object.defineProperty方式
const s4 = Symbol();
Object.defineProperty(obj, s4, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 'mba',
});

console.log(obj[s1], obj[s2], obj[s3], obj[s4]);
// 注意: 不能通过.语法获取
// console.log(obj.s1)

// 4.使用Symbol作为key的属性名,在遍历/Object.keys等中是获取不到这些Symbol值
// 需要Object.getOwnPropertySymbols来获取所有Symbol的key
console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertyNames(obj)); // []
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(), Symbol(), Symbol(aaa), Symbol() ]

const sKeys = Object.getOwnPropertySymbols(obj);
for (const Key of sKeys) {
  console.log(obj[Key]);
}

// 5.Symbol.for(key)/Symbol.keyFor(symbol)
const sa = Symbol.for('aaa');
const sb = Symbol.for('aaa');
console.log(sa === sb); // true

const key = Symbol.keyFor(sa);
console.log(key); // aaa
const sc = Symbol.for(key);
console.log(sa === sc); // true
