/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-13 17:41:45
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-13 18:51:56
 */
// 转成Promise对象
// function foo() {
//   const obj = { name: 'momo' };
//   return new Promise((resolve) => {
//     resolve(obj);
//   });
// }

// foo().then((res) => {
//   console.log('res:', res);
// });

// 类方法Promise.resolve
// 1.普通的值
// const promise = Promise.resolve({ name: 'momo' });
// // 相当于
// const promise2 = new Promise((resolve, reject) => {
//   resolve({ name: 'momo' });
// });

// 2.传入Promise
const promise = Promise.resolve(
  new Promise((resolve, reject) => {
    resolve('11111');
  })
);

promise.then((res) => {
  console.log('res:', res);
});

// 3.传入thenable对象
