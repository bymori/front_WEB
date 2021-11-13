/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-13 16:58:22
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-13 17:35:46
 */
// const promise = new Promise((resolve, reject) => {
//   resolve();
//   //   reject('rejected status');
//   //   throw new Error('rejected status');
// });

// 1.当executor抛出异常时, 也是会调用错误(拒绝)捕获的回调函数的
// promise.then(undefined, (err) => {
//   console.log('err:', err);
//   console.log('----------');
// });

// 2.通过catch方法来传入错误(拒绝)捕获的回调函数
// promise/a+规范

// promise.catch((err) => {
//   console.log('err:', err);
// });

// promise
//   .then((res) => {
//     // return new Promise((resolve, reject) => {
//     //   reject('then rejected status');
//     // });
//     throw new Error('error message');
//   })
//   .catch((err) => {
//     console.log('err:', err);
//   });

// 3.拒绝捕获的问题
// promise.then(
//   (res) => {},
//   (err) => {
//     console.log('err:', err);
//   }
// );

// promise
//   .then((res) => {})
//   .then((res) => {
//     throw new Error('then error message');
//   })
//   .catch((err) => {
//     console.log('err:', err);
//   });

// promise.catch((err) => {});

// 4.catch方法的返回值
const promise = new Promise((resolve, reject) => {
  reject('111111');
});

promise
  .then((res) => {
    console.log('res:', res);
  })
  .catch((err) => {
    console.log('err:', err);
    return 'catch return value';
  })
  .then((res) => {
    console.log('res result:', res);
  })
  .catch((err) => {
    console.log('err result:', err);
  });
