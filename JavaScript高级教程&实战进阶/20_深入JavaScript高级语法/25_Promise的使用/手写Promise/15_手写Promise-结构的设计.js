/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-13 19:25:19
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-13 20:47:36
 */
// ES6 ES2015
// https://promisesaplus.com/
const PROMISE_STATUS_PENDING = 'pending';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECTED = 'rejected';

class IOPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED;
        this.value = value;
        console.log('resolve被调用');
      }
    };

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED;
        this.reason = reason;
        console.log('reject被调用');
      }
    };

    executor(resolve, reject);
  }
}

const promise = new IOPromise((resolve, reject) => {
  console.log('状态pending');
  resolve(1111);
  reject(2222);
});
