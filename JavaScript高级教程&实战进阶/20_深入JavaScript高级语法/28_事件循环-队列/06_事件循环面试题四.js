/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-18 23:02:28
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-18 23:07:11
 */
async function async1() {
  console.log('async1 start'); // 2
  await async2();
  console.log('async1 end'); // 9
}

async function async2() {
  console.log('async2'); // 3
}

console.log('script start'); // 1

setTimeout(function () {
  console.log('setTimeout0'); // 11
}, 0);

setTimeout(function () {
  console.log('setTimeout2'); // 13
}, 300);

setImmediate(() => console.log('setImmediate')); // 12

process.nextTick(() => console.log('nextTick1')); // 7

async1();

process.nextTick(() => console.log('nextTick2')); // 8

new Promise(function (resolve) {
  console.log('promise1'); // 4
  resolve();
  console.log('promise2'); // 5
}).then(function () {
  console.log('promise3'); // 10
});

console.log('script end'); // 6

/**
 * script start
 * async1 start
 * async2
 * promise1
 * promise2
 * script end
 * nextTick1
 * nextTick2
 * async1 end
 * promise3
 * setTimeout0
 * setImmediate
 * setTimeout2
 */
