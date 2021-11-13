/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-13 17:37:02
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-13 17:37:02
 */
const promise = new Promise((resolve, reject) => {
  //   resolve('resolve message');
  reject('reject message');
});

promise
  .then((res) => {
    console.log('res:', res);
  })
  .catch((err) => {
    console.log('err:', err);
  })
  .finally(() => {
    console.log('finally code execute');
  });
