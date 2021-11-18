/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-18 21:16:43
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-18 21:25:43
 */
setTimeout(function () {
  console.log('setTimeout1');
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log('then4');
    });
    console.log('then2');
  });
});

new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('then1');
});

setTimeout(function () {
  console.log('setTimeout2');
});

console.log(2);

queueMicrotask(() => {
  console.log('queueMicrotask1');
});

new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log('then3');
});

/**
 *  promise1
 *  2
 *  then1
 *  queueMicrotask1
 *  then3
 *
 *  setTimeout1
 *  then2
 *  then4
 *
 *  setTimeout2
 */
