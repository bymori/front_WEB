/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-18 21:26:19
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-18 21:41:12
 */
// async function bar() {
//   console.log('22222');
//   return new Promise((resolve) => {
//     resolve();
//   });
// }

// async function foo() {
//   console.log('111111');

//   await bar();

//   console.log('33333'); // 被加入 Promise 的微任务队列
// }

// foo();
// console.log('444444');

/**
 * 111111
 * 22222
 * 444444
 * 33333
 */

async function async1() {
  console.log('async1 start'); // 2 -- 2
  await async2();
  console.log('async1 end'); //4 -- 6
}

async function async2() {
  console.log('async2'); //5 -- 3
}

console.log('script start'); // 1 -- 1

setTimeout(function () {
  console.log('setTimeout'); //8 -- 8
}, 0);

async1();

new Promise(function (resolve) {
  console.log('promise1'); //6 -- 4
  resolve();
}).then(function () {
  console.log('promise2'); //7 -- 7
});

console.log('script end'); //3 -- 5

/**
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * async1 end
 * promise2
 * setTimeout
 */
