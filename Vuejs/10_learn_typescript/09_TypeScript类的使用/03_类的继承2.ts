/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 21:34:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 21:34:45
 */
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log('eating Person');
  }
}

class Student extends Person {
  sno: number;

  constructor(name: string, age: number, sno: number) {
    // super调用父类的构造器
    super(name, age);
    this.sno = sno;
  }

  eating() {
    console.log('student eating');
    super.eating();
  }

  studying() {
    console.log('studying');
  }
}

const stu = new Student('ioinn', 19, 111);
console.log(stu.name);
console.log(stu.age);
console.log(stu.sno);

stu.eating();

export {};
