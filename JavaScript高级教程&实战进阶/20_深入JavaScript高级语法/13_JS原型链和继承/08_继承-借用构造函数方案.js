/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 18:09:50
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 18:31:24
 */
// 父类: 公共属性和方法
function Person(name, age, friends) {
  // this = stu
  this.name = name;
  this.age = age;
  this.friends = friends;
}

Person.prototype.eating = function () {
  console.log(this.name + ' eating~');
};

// 子类: 特有属性和方法
function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends);
  //   this.name = name;
  //   this.age = age;
  //   this.friends = friends;
  this.sno = 111;
}

var p = new Person();
Student.prototype = p;

Student.prototype.studying = function () {
  console.log(this.name + ' studying~');
};

// name/sno
var stu = new Student('momo', 18, ['ioinn'], 111);
// console.log(stu.name);
// stu.eating();
// stu.studying();

// 原型链实现继承已经解决的弊端
// 1.第一个弊端: 打印stu对象, 继承的属性是看不到的
console.log(stu);

// 2.第二个弊端: 创建出来两个stu的对象
var stu1 = new Student('mo11', 18, ['io11'], 211);
var stu2 = new Student('mo22', 20, ['io22'], 222);

// 直接修改对象上的属性, 是给本对象添加了一个新属性
stu1.name = 'momo';
console.log(stu2.name);

// 获取引用, 修改引用中的值, 会相互影响
stu1.friends.push('mori');

console.log(stu1.friends);
console.log(stu2.friends);

// 3.第三个弊端: 在前面实现类的过程中都没有传递参数
// var stu3 = new Student('张三', 233);

// 注意: 借用构造函数也是有弊端:
// 1.第一个弊端: Person函数至少被调用了两次
// 2.第二个弊端: stu的原型对象上会多出一些属性, 但是这些属性是没有存在的必要
