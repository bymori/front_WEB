/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 23:32:10
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 23:52:35
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  running() {
    console.log(this.name + ' running~');
  }

  eating() {
    console.log(this.name + ' eating~');
  }

  personMethod() {
    console.log('处理逻辑1');
    console.log('处理逻辑2');
    console.log('处理逻辑3');
  }

  static staticMethod() {
    console.log('PersonStaticMethod');
  }
}

// Student称之为子类(派生类)
class Student extends Person {
  // JS引擎在解析子类的时候就有要求, 如果我们有实现继承
  // 那么子类的构造方法中, 在使用this之前
  constructor(name, age, sno) {
    super(name, age);

    this.sno = sno;
  }

  studying() {
    console.log(this.name + ' studying~');
  }

  // 子类对父类的方法的重写
  running() {
    console.log('student ' + this.name + ' running');
  }

  // 重写personMethod方法
  personMethod() {
    // 复用父类中的处理逻辑
    super.personMethod();

    console.log('处理逻辑4');
    console.log('处理逻辑5');
    console.log('处理逻辑6');
  }

  // 重写静态方法
  static staticMethod() {
    super.staticMethod();
    console.log('StudentStaticMethod');
  }
}

var stu = new Student('ioinn', 18, 111);
console.log(stu);

stu.eating();
stu.running();

// console.log(Object.getOwnPropertyDescriptors(stu.__proto__));
// console.log(Object.getOwnPropertyDescriptors(stu.__proto__.__proto__));

stu.personMethod();
Student.staticMethod();

// 类方法
console.log(Object.getOwnPropertyDescriptors(Person));
