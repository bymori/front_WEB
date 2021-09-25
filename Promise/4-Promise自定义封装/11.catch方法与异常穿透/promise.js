/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-25 16:13:33
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-25 18:38:07
 */
//声明构造函数
function Promise(executor) {
  //添加属性
  this.PromiseState = 'pending';
  this.PromiseResult = null;

  //声明属性
  this.callbacks = [];

  //保存实例化对象 this 的值
  const self = this; // self _this that

  //resolve 函数
  function resolve(data) {
    //判断状态 是否修改过
    if (self.PromiseState !== 'pending') return;
    //1. 修改对象的状态 (promiseState)
    self.PromiseState = 'fulfilled'; //resolved
    //2. 设置对象结果值 (promiseResult)
    self.PromiseResult = data;

    //调用成功的回调函数
    self.callbacks.forEach((item) => {
      item.onResolved(data);
    });
  }

  //reject 函数
  function reject(data) {
    //判断状态 是否修改过
    if (self.PromiseState !== 'pending') return;
    //1. 修改对象的状态 (promiseState)
    self.PromiseState = 'rejected';
    //2. 设置对象结果值 (promiseResult)
    self.PromiseResult = data;

    self.callbacks.forEach((item) => {
      item.onRejected(data);
    });
  }

  try {
    //同步调用『执行器函数』
    executor(resolve, reject);
  } catch (error) {
    //修改 promise 对象状态为『失败』
    reject(error);
  }
}

//添加 then 方法
Promise.prototype.then = function (onResolved, onRejected) {
  const self = this;
  //判断回调函数参数
  if (typeof onRejected !== 'function') {
    onRejected = (reason) => {
      throw reason;
    };
  }
  if (typeof onResolved !== 'function') {
    onResolved = (value) => value;
  }
  return new Promise((resolve, reject) => {
    //封装函数 callback
    function callback(type) {
      try {
        //获取回调函数的执行结果
        let result = type(self.PromiseResult);
        //判断
        if (result instanceof Promise) {
          //如果是 Promise 类型的对象
          result.then(
            (v) => {
              resolve(v);
            },
            (r) => {
              reject(r);
            }
          );
        } else {
          //结果的对象状态为『成功』
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    }
    //调用 回调函数 PromiseState
    if (this.PromiseState === 'fulfilled') {
      callback(onResolved);
    }
    if (this.PromiseState === 'rejected') {
      callback(onRejected);
    }
    //调用 pending
    if (this.PromiseState === 'pending') {
      //保存回调函数
      this.callbacks.push({
        onResolved: function () {
          callback(onResolved);
        },
        onRejected: function () {
          callback(onRejected);
        },
      });
    }
  });
};

//添加 catch 方法
Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};
