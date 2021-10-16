/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 22:39:28
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 22:43:17
 */
class Person {
  name: string = '123';
  eating() {}
}

const p = new Person();

const p1: Person = {
  name: 'ioinn',
  eating() {},
};

function printPerson(p: Person) {
  console.log(p.name);
}

printPerson(new Person());
printPerson({ name: '沫沫', eating: function () {} });

export {};
