/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-20 23:07:45
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-20 23:39:31
 */
/* function fibonacci(n) {
  return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2); //递归调用
} */

function fibonacci(n) {
  const MOD = 1000000007;
  if (n < 2) {
    return n;
  }
  let p = 0,
    q = 0,
    r = 1;
  console.time('运行时间');
  for (let i = 2; i <= n; ++i) {
    p = q;
    q = r;
    r = (p + q) % MOD;
  }
  console.timeEnd('运行时间');
  return r;
  //来自 leetcode 算法
}
var onmessage = function (event) {
  var number = event.data;
  console.log('分线程接收到主线程发送的数据: ' + number);
  var result = fibonacci(number);
  postMessage(result);
  console.log('分线程向主线程返回数据: ' + result);

  // alert(result)  alert是window的方法, 在分线程不能调用
  // 分线程中的全局对象不再是window, 所以在分线程中不可能更新界面
};
