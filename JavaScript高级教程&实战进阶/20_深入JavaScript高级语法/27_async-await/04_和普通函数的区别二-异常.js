/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-14 15:37:38
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-14 15:39:50
 */
async function foo() {
  console.log('foo function start~');

  console.log('中间代码~');

  // 异步函数中的异常, 会被作为异步函数返回的Promise的reject值的
  throw new Error('error message');

  console.log('foo function end~');
}

// 异步函数的返回值一定是一个Promise
foo().catch((err) => {
  console.log('catch err:', err);
});

console.log('后续还有代码~~~~~');
