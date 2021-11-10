/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 22:04:15
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 22:10:48
 */
// 类的声明
class Person {
  // 类的构造方法
  // 注意: 一个类只能有一个构造函数
  // 1.在内存中创建一个对象 mock = {}
  // 2.将类的原型prototype赋值给创建出来的对象 mock.__proto__ = Person.prototype
  // 3.将对象赋值给函数的this: new 绑定 this = mock
  // 4.执行函数体中的代码
  // 5.自动返回创建出来的对象
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var p1 = new Person('ioinn', 18);
var p2 = new Person('momo', 30);
console.log(p1); // Person { name: 'ioinn', age: 18 }
console.log(p2); // Person { name: 'momo', age: 30 }
