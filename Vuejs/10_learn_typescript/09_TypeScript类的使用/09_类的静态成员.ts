/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 22:17:08
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 22:20:01
 */
// class Person {
//   name: string = '';
//   age: number = 12;
// }

// const p = new Person();
// p.name = '123';

class Student {
  static time: string = '22:00';

  static attendClass() {
    console.log('去学习~');
  }
}

console.log(Student.time);
Student.attendClass();
