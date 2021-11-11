/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 16:03:31
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 16:03:32
 */
class Person {}

function mixinRunner(BaseClass) {
  class NewClass extends BaseClass {
    running() {
      console.log('running~');
    }
  }
  return NewClass;
}

function mixinEater(BaseClass) {
  return class extends BaseClass {
    eating() {
      console.log('eating~');
    }
  };
}

// 在JS中类只能有一个父类: 单继承
class Student extends Person {}

var NewStudent = mixinEater(mixinRunner(Student));
var ns = new NewStudent();
ns.running();
ns.eating();
