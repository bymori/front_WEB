/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-25 16:13:33
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-25 16:45:10
 */
//声明构造函数
function Promise(executor) {
  //添加属性
  this.PromiseState = 'pending';
  this.PromiseResult = null;

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
  }

  //reject 函数
  function reject(data) {
    //判断状态 是否修改过
    if (self.PromiseState !== 'pending') return;
    //1. 修改对象的状态 (promiseState)
    self.PromiseState = 'rejected';
    //2. 设置对象结果值 (promiseResult)
    self.PromiseResult = data;
  }

  try {
    //同步调用『执行器函数』
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

//添加 then 方法
Promise.prototype.then = function (onResolved, onRejected) {
  //调用 回调函数 PromiseState
  if (this.PromiseState === 'fulfilled') {
    onResolved(this.PromiseResult);
  }
  if (this.PromiseState === 'rejected') {
    onRejected(this.PromiseResult);
  }
};
