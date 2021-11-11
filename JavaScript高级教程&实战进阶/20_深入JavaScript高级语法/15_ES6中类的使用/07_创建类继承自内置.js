/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 15:42:50
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 15:58:05
 */
class Person {}

class Student extends Person {}

class IOArray extends Array {
  firstItem() {
    return this[0];
  }

  lastItem() {
    return this[this.length - 1];
  }
}

var arr = new IOArray(1, 2, 3);
console.log(arr.firstItem());
console.log(arr.lastItem());
