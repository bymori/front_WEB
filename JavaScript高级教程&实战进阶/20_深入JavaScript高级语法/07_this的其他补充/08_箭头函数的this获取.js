/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-08 00:35:07
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-08 15:22:29
 */
// 1. 箭头函数中的this指向
// var name = 'ioinn';

// var foo = () => {
//   console.log(this);
// };

// foo();

// var obj = { foo: foo };
// obj.foo();

// foo.call('abc');

// 2. 应用场景
var obj = {
  data: [],
  getData: function () {
    // 发送网络请求 将结果放到data属性上
    // 在箭头函数之前的解决方案
    // var _this = this;
    // setTimeout(function () {
    //   var result = ['abc', 'cba', 'nba'];
    //   _this.data = result;
    // }, 2000);
    //
    // 箭头函数之后
    setTimeout(() => {
      var result = ['abc', 'cba', 'nba'];
      this.data = result;
    }, 2000);
  },
};

obj.getData();

console.log(obj.data);
