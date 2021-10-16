/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 20:45:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 20:47:16
 */
// 实现方式一: 联合类型  *优先使用联合类型
function getLength(args: string | any[]) {
  return args.length;
}

console.log(getLength('abc'));
console.log(getLength([123, 321, 123]));

// 实现方式二: 函数的重载
// function getLength(args: string): number;
// function getLength(args: any[]): number;

// function getLength(args: any): number {
//   return args.length;
// }

// console.log(getLength('abc'));
// console.log(getLength([123, 321, 123]));
