/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-18 20:56:09
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-18 21:14:53
 */

/**
 * 规范: 在执行任何的宏任务之前, 都需要先保证微任务队列已经被清空
 *  宏任务队列: macrotask queue
 *  微任务队列: microtask queue
 * 执行过程如下：
 *  JavaScript引擎首先从macrotask queue中取出第一个任务，
 *  执行完毕后，将microtask queue中的所有任务取出，按顺序全部执行；
 *  然后再从macrotask queue中取下一个，
 *  执行完毕后，再次将microtask queue中的全部取出；
 *  循环往复，直到两个queue中的任务都取完。
 */
setTimeout(() => {
  console.log('setTimeout');
}, 1000);

queueMicrotask(() => {
  console.log('queueMicrotask');
});

Promise.resolve().then(() => {
  console.log('Promise then');
});

// main script  foo()  bar() console.log() ...
function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
  foo();
}

bar();

console.log('其他代码');
