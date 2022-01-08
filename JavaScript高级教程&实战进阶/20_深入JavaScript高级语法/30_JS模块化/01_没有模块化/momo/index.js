/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-08 21:53:09
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-08 21:59:43
 */
// var name = 'momo';
// var age = 19;
// var isFlag = true;

var moduleA = (function () {
  var name = 'momo';
  var age = 19;
  var isFlag = true;

  return {
    name: name,
    isFlag: isFlag,
  };
})();
