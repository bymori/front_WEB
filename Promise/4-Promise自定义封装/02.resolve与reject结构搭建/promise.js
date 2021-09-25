/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-25 16:13:33
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-25 16:23:09
 */
//声明构造函数
function Promise(executor) {
  //resolve 函数
  function resolve(data) {

  }

  //reject 函数
  function reject(data) {
      
  }

  //同步调用『执行器函数』
  executor(resolve, reject);
}

//添加 then 方法
Promise.prototype.then = function (onResolved, onRejected) {};
