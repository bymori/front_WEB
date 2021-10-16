/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 22:03:54
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 22:15:52
 */
class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  // 访问器setter/getter
  // setter
  set name(newName) {
    this._name = newName;
  }
  // getter
  get name() {
    return this._name;
  }
}

const p = new Person('ioinn');
// console.log(p.name);
// p.name = 'mori';
p.name = '末日';
console.log(p.name);
