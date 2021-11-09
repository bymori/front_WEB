/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 22:52:01
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 23:01:22
 */
function createPerson(name, age, height, address) {
  var p = {};
  p.name = name;
  p.age = age;
  p.height = height;
  p.address = address;
  p.eating = function () {
    console.log(this.name + '在吃东西');
  };
  p.running = function () {
    console.log(this.name + '在跑步');
  };

  return p;
}

var p1 = createPerson('沫沫', 19, 1.78, '北京');
var p2 = createPerson('张三', 22, 1.85, '上海');
var p3 = createPerson('李四', 26, 1.88, '芜湖');

// 工厂模式的缺点(获取不到对象最真实的类型)
console.log(p1, p2, p3);
