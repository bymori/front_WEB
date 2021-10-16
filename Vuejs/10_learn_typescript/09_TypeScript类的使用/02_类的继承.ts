/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 21:24:23
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 21:33:47
 */
class Person {
  name: string = '';
  age: number = 0;
  eating() {
    console.log('eating');
  }
}

class Student extends Person {
  sno: number = 0;
  studying() {
    console.log('studying');
  }
}

class Teacher extends Person {
  title: string = '';
  teaching() {
    console.log('teaching');
  }
}

const stu = new Student();
stu.name = 'ioinn';
stu.age = 10;
console.log(stu.name);
console.log(stu.age);
stu.eating();
