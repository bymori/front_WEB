/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 16:30:51
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 16:35:12
 */
// tuple元组: 多种元素的组合

// 1.数组的弊端
// const info: any[] = ['ioinn', 18, 1.88];
// const infoObj = {
//   name: 'ioinn',
//   age: 18,
//   height: 1.88,
// };

// const name = info[0];
// console.log(name.length);

// 2.元组的特点
const info: [string, number, number] = ['ioinn', 19, 1.86];

const name = info[0];
console.log(name.length);
// const age = info[1];
// console.log(age.length);//类型“number”上不存在属性“length”

export {};
