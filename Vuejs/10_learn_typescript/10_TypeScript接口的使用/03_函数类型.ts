/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 23:32:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 23:38:35
 */
// type CalcFn = (n1: number, n2: number) => number
// 可调用的接口
interface CalcFn {
  (n1: number, n2: number): number;
}

function calc(num1: number, num2: number, calcFn: CalcFn) {
  return calcFn(num1, num2);
}

const add: CalcFn = (num1, num2) => {
  return num1 + num2;
};

const sub: CalcFn = (num1, num2) => {
  return num1 - num2;
};
const ride: CalcFn = (num1, num2) => {
  return num1 * num2;
};

console.log(calc(20, 30, add));
console.log(calc(20, 30, sub));
console.log(calc(20, 30, ride));
