/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 20:11:40
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 20:15:27
 */
function calc(
  n1: number,
  n2: number,
  fn: (num1: number, num2: number) => number
) {
  return fn(n1, n2);
}

const result1 = calc(20, 30, function (a1, a2) {
  return a1 + a2;
});
console.log(result1);

const result2 = calc(20, 30, function (a1, a2) {
  return a1 * a2;
});
console.log(result2);
