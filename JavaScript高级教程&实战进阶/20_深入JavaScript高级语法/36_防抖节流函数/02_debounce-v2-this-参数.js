/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-12 18:50:36
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-12 18:50:36
 */
function debounce(fn, delay) {
  // 1.定义一个定时器, 保存上一次的定时器
  let timer = null;

  // 2.真正执行的函数
  const _debounce = function (...args) {
    // 取消上一次的定时器
    if (timer) clearTimeout(timer);
    // 延迟执行
    timer = setTimeout(() => {
      // 外部传入的真正要执行的函数
      fn.apply(this, args);
    }, delay);
  };

  return _debounce;
}
