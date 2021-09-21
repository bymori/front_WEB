/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-21 17:58:25
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-21 18:06:47
 */
/* 
    定义一个模块 math
      在该模块中提供两个方法
        add(a, b);  //求两个数的和
        mul(a, b);  //求两个数的积
*/

exports.add = function (a, b) {
  return a + b;
};
exports.mul = function (a, b) {
  return a * b;
};
