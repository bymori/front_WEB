/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-08 20:47:45
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-08 21:50:30
 */
function foo(type) {
  if (type === 0) {
    throw new Error('foo error message');
  }
}

//  两种处理方法:

//  1. 第一种是不处理, bar函数会继续将收到的异常直接抛出去 那么异常会进一步的抛出， 直到最顶层的调用
//   如果在最顶层也没有对这个异常进行处理，那么我们的程序就会终止执行，并且报错
function bar() {
  // 2. 使用 try catch 来捕获异常
  try {
    foo(0);
    console.log('bar 后续代码继续执行');
    //   } catch {
    // 从 ES10 开始 可以省略 (error) 参数
  } catch (error) {
    console.log('error ', error.message);
    // foo(1);
  } finally {
    console.log('这里的代码 无论是否异常 都会执行');
  }
}
function test() {
  bar();
}
function demo() {
  test();
}
demo();

console.log('后续的代码 继续执行');
