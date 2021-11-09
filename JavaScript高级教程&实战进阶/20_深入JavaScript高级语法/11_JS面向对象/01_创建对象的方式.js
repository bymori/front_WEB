/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 20:46:09
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 20:54:08
 */
// 创建一个对象, 对某一个人进行抽象(描述)
// 1. 创建方式一: 通过 new Object() 创建
var obj = new Object();
obj.name = 'ioinn';
obj.age = 18;
obj.height = 1.8;
obj.running = function () {
  console.log(this.name + '在跑步');
};

// 2. 创建方式二: 字面量方式
var info = {
  name: 'momo',
  age: 40,
  height: 1.75,
  eating: function () {
    console.log(this.name + '在吃饭');
  },
};
