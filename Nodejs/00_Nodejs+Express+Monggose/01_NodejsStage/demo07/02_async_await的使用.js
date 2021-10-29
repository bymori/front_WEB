/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 19:59:44
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-29 20:20:21
 */

//  普通方法;
// function test() {
//   return '您好nodejs';
// }
// console.log(test());

// async function test() {
//   return '您好nodejs';
// }
// console.log(test()); //  Promise { '您好nodejs' }

//  错误 方法
// async function test() {
//   //  Promise { '您好nodejs' }
//   return '您好nodejs';
// }
// console.log(await test()); //错误  ： await必须得用在async的方法里面

//  async await
// async function test() {
//   return '您好nodejs';
// }

// async function main() {
//   var data = await test(); //获取异步方法里面的数据

//   console.log(data);
// }
// main();

async function test() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      var name = '张三 222';
      resolve(name);
    }, 1000);
  });
}

async function main() {
  var data = await test(); //获取异步方法里面的数据
  console.log(data);
}
main();
