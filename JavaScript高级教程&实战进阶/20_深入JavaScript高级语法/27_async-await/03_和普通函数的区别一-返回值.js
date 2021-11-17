/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-14 15:32:19
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-14 15:36:05
 */
async function foo() {
  console.log('foo function start~');

  console.log('中间代码~');

  console.log('foo function end~');

  // 1.返回一个值
  //   return 'ioinn';

  // 2.返回thenable
  //   return {
  //     then: function (resolve, reject) {
  //       resolve('哈哈 返回thenable');
  //     },
  //   };

  // 3.返回Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('嘿嘿嘿 返回Promise');
    }, 300);
  });
}

// 异步函数的返回值一定是一个Promise
const promise = foo();
promise.then((res) => {
  console.log('promise then function exec:', res);
});
