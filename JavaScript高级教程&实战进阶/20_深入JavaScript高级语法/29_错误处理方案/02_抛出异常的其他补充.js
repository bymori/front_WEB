/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-08 20:27:45
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-08 20:44:32
 */

class IOError {
  constructor(errorCode, errorMessage) {
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
  }
}

function foo(type) {
  console.log('foo 函数开始执行');

  if (type === 0) {
    //   1. 抛出一个字符串类型(基本的数据类型)
    // throw 'error';

    // 2. 比较常见的是抛出一个对象类型
    // throw { errorCode: -1001, errorMessage: 'type 不能为 0' };

    // 3. 创建类, 并且创建这个类对应的对象
    // throw new IOError(-1001, 'type 不能为 0');

    // 4. JS 默认提供了一个 Error
    // const err = new Error('type 不能为 0');

    // err.name = 'momo';
    // err.stack = 'ioinn';
    // // [ioinn] { name: 'momo' }

    // console.log('message: ', err.message);
    // // console.log('name: ', err.name);
    // // console.log('stack: ', err.stack);

    // 5. Error 的子类
    //   RangeError 下标值越界时 使用的错误类型
    //   SyntaxError 解析语法错误时 使用的错误类型
    //   TypeError 出现类型错误时 使用的错误类型
    const err = new TypeError('当前type类型是错误的');

    throw err;

    // 强调：如果函数中已经抛出了异常， 那么后续的代码都不会继续执行了
    console.log('foo 函数后续的代码');
  }

  console.log('foo 函数结束执行');
}

foo(0);

console.log('后续的代码继续执行');

function test() {
  console.log('test');
}

function demo() {
  test();
}

function bar() {
  demo();
}

bar();
