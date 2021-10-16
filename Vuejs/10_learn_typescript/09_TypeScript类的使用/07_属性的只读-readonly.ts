/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 21:52:45
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 22:01:24
 */
class Person {
  // 1.只读属性是可以在构造器中赋值, 赋值之后就不可以修改
  // 2.属性本身不能进行修改, 但是如果它是对象类型, 对象中的属性是可以修改
  readonly name: string;
  age?: number;
  readonly friend?: Person;
  constructor(name: string, friend?: Person) {
    this.name = name;
    this.friend = friend;
  }
}

const p = new Person('ioinn', new Person('momo'));
console.log(p.name);
console.log(p.friend);

// 不可以直接修改friend
// p.friend = new Person("末日")
if (p.friend) {
  p.friend.age = 30;
}

// p.name = "123"
