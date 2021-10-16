/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 20:49:26
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 21:20:39
 */
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(this.name + ' eating');
  }
}

const p = new Person('ioinn', 19);
console.log(p.name);
console.log(p.age);
p.eating();

export {};
