/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 16:40:01
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 16:40:01
 */
// 多态: 当对不同的数据类型执行同一个操作时, 如果表现出来的行为(形态)不一样, 那么就是多态的体现.
function calcArea(foo) {
  console.log(foo.getArea());
}

var obj1 = {
  name: 'ioinn',
  getArea: function () {
    return 1000;
  },
};

class Person {
  getArea() {
    return 100;
  }
}

var p = new Person();

calcArea(obj1);
calcArea(p);

// 也是多态的体现
function sum(m, n) {
  return m + n;
}

sum(20, 30);
sum('abc', 'cba');
