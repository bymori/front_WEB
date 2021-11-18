/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-18 21:43:07
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-18 22:35:21
 */
Promise.resolve()
  .then(() => {
    console.log(0);
    // 1. 直接return一个值 相当于resolve(4)
    // return 4;
    // // 0 1 4 2 3 5 6

    // 2. return thenable的值
    // return {
    //   then: function (resolve) {
    //     // 大量的计算
    //     resolve(4);
    //   },
    // };
    // // 0 1 2 4 3 5 6

    // 3.return Promise
    // 不是普通的值, 多加一次微任务
    // Promise.resolve(4), 多加一次微任务
    // 一共多加两次微任务
    return Promise.resolve(4);
    // // 0 1 2 3 4 5 6
  })
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
