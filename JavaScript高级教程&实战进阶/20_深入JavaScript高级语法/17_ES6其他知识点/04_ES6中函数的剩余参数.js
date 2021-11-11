/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 21:29:29
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 21:32:45
 */
// function foo(...args, m, n) {
//   console.log(m, n)
//   console.log(args)
//   console.log(arguments)
// }

// foo(20, 30, 40, 50, 60)

// rest parameters 必须放到最后 !!!
// Rest parameter must be last formal parameter

function foo(m, n = m + 1) {
  console.log(m, n);
}

foo(10);
