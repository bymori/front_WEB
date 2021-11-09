/*
 * @Descrithisttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 00:28:20
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 00:53:42
 */

// 规范: 构造函数的首字母一般是大写
function Person(name, age, height, address) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.address = address;

  this.eating = function () {
    console.log(this.name + '在吃东西');
  };

  this.running = function () {
    console.log(this.name + '在跑步');
  };
}

var p1 = new Person('沫沫', 19, 1.78, '北京');
var p2 = new Person('张三', 22, 1.85, '上海');
var p3 = new Person('李四', 26, 1.88, '芜湖');

console.log(p1, p2, p3);
console.log(p1.__proto__.constructor.name);

console.log(p1.eating === p2.eating);
console.log(p1.running === p2.running);
