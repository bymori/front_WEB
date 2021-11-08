/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-08 20:54:25
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-08 21:02:18
 */
function foo(num1, num2, num3) {
  // 类数组对象中(长得像是一个数组，本质上是一个对象)： arguments
  // console.log(arguments);

  // 常见的对 arguments 的操作的三个方法
  // 1. 获取参数的长度
  console.log(arguments.length);
  // 2. 根据索引值获取某一个参数
  console.log(arguments[2]);
  // 3. callee 获取当前 arguments 所在的函数
  console.log(arguments.callee);
  //   arguments.callee()
}

foo(10, 20, 30, 40, 50);
