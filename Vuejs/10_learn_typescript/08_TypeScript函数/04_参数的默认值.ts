/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 20:20:44
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 20:20:45
 */
// 必传参数 - 有默认值的参数 - 可选参数
function foo(y: number, x: number = 20) {
  console.log(x, y);
}

foo(30);
