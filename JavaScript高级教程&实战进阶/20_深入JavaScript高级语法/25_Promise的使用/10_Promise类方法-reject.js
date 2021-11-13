/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-13 18:54:24
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-13 18:55:28
 */
// const promise = Promise.reject('rejected message');
// 相当于
// const promise2 = new Promise((resolve, reject) => {
//   reject('rejected message');
// });

// 注意: 无论传入什么值都是一样的
const promise = Promise.reject(new Promise(() => {}));

promise
  .then((res) => {
    console.log('res:', res);
  })
  .catch((err) => {
    console.log('err:', err);
  });
