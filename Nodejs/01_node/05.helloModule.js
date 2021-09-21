/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-21 18:35:40
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-21 19:57:53
 */

/* exports.name = '沫沫';
exports.age = 18;
exports.sayName = function () {
  console.log('sayName输出：沫沫');
}; */

module.exports = {
  name: '沫沫',
  age: 18,
  sayName: function () {
    console.log('sayName输出：沫沫');
  },
};

/* var obj = {};
obj.a = {};
var a = obj.a;
// a 和 obj.a 指向的是同一个对象
a.name = '沫沫';
console.log(a.name);
console.log(obj.a.name); */

/* var obj = new Object();
obj.name = '沫沫';
var obj2 = obj;
obj2.name = '末日';

obj2 = null;

console.log('obj.name', obj.name);
// console.log('obj2.name', obj2.name);
console.log('obj2', obj2); */
