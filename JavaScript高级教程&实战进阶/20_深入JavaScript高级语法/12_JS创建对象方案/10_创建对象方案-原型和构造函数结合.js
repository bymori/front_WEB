/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 01:57:29
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 02:02:50
 */
function Person(name, age, height, address) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.address = address;
}

Person.prototype.eating = function () {
  console.log(this.name + '在吃东西');
};
Person.prototype.running = function () {
  console.log(this.name + '在跑步');
};

var p1 = new Person('沫沫', 19, 1.78, '北京');
var p2 = new Person('张三', 22, 1.85, '上海');

p1.eating();
p2.eating();

console.log(p1.eating === p2.eating); // true
