/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-13 20:47:23
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-13 21:01:52
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
        queueMicrotask(() => {
          this.value = value;
          this.onFulfilled(this.value);
        });
      }
    };

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED;
        queueMicrotask(() => {
          this.reason = reason;
          this.onRejected(this.reason);
        });
      }
    };

    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled;
    this.onRejected = onRejected;
  }
}

const promise = new IOPromise((resolve, reject) => {
  console.log('状态pending');
  resolve(1111);
  reject(2222);
});

// 调用then方法
promise.then(
  (res) => {
    console.log('res1:', res);
    return 1111;
  },
  (err) => {
    console.log('err1:', err);
  }
);

promise.then(
  (res) => {
    console.log('res2:', res);
  },
  (err) => {
    console.log('err2:', err);
  }
);
