/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-17 00:16:48
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-17 00:24:40
 */
interface IPerson {
  name: string;
  age: number;
  height: number;
}

// const info = {
//   name: 'ioinn',
//   age: 18,
//   height: 1.88,
//   address: '温州市',
// };

// // freshness 擦除
// const p: IPerson = info;

// console.log(info);
// console.log(p);

function printInfo(person: IPerson) {
  console.log(person);
}

// 代码会报错
// printInfo({
//   name: "why",
//   age: 18,
//   height: 1.88,
//   address: "广州市"
// })

const info = {
  name: 'ioinn',
  age: 18,
  height: 1.88,
  address: '温州市',
};

printInfo(info);
