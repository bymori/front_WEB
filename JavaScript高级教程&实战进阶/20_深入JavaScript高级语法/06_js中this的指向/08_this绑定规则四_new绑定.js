/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 22:17:50
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 22:23:06
 */

/**
 * 我们通过一个new关键字调用一个函数(构造器)时，这个时候this是在调用这个构造器时创建出来的对象
 * this = 创建出来的对象
 * 这个绑定的过程就是 new 绑定
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var p1 = new Person('momo', 19);
var p2 = new Person('26', 26);

console.log(p1, p2);
