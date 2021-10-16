/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 21:51:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 21:53:22
 */
class Person {
  private name: string = '';

  // 封装了两个方法, 通过方法来访问name
  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }
}

const p = new Person();
console.log(p.getName());
p.setName('ioinn');

export {};
