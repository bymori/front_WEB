/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 20:39:38
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 20:47:54
 */
/**
 * 从某些角度来说，开发中如果没有this，很多问题我们也是有解决方案的
 * 但是没有this，会让我们编写代码变得非常的不方便
 */

var obj = {
  name: 'ioinn',
  eating: function () {
    console.log(obj.name + '在吃东西');
  },
  running: function () {
    console.log(this.name + '在跑步');
  },
  studying: function () {
    console.log(this.name + '在学习');
  },
};

obj.eating();
obj.running();
obj.studying();
