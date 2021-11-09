/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 22:46:17
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 22:51:39
 */

var p1 = {
  name: 'ioinn',
  age: 18,
  height: 1.8,
  address: '上海市',
  eating: function () {
    console.log(this.name + '在吃东西');
  },
  running: function () {
    console.log(this.name + '在跑步');
  },
};

var p2 = {
  name: '沫沫',
  age: 18,
  height: 1.8,
  address: '上海市',
  eating: function () {
    console.log(this.name + '在吃东西');
  },
  running: function () {
    console.log(this.name + '在跑步');
  },
};
