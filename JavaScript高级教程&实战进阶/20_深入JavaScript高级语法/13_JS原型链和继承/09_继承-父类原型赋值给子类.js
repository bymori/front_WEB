/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 18:34:08
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 19:17:53
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

// 直接将父类的原型赋值给子类, 作为子类的原型
// 不要这么做，因为这么做意味着以后修改了子类型原型对象的某个引用类型的时候，父类型原生对象的引用类型也会被修改
Student.prototype = Person.prototype;

Student.prototype.studying = function () {
  console.log(this.name + ' studying~');
};

// name/sno
var stu = new Student('momo', 18, ['ioinn'], 111);
console.log(stu);
stu.eating();
