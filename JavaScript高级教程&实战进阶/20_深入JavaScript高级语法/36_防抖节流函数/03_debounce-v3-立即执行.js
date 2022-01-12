/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-12 20:07:20
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-12 20:20:09
 */
/**
 * @name: 防抖函数
 * @test: test font
 * @msg:
 * @param { Function } fn
 * @param {Number} delay
 * @param {Boolean} immediate
 * @return {Function}
 */

function debounce(fn, delay, immediate = false) {
  // 1.定义一个定时器, 保存上一次的定时器
  let timer = null;
  let isInvoke = false;

  // 2.真正执行的函数
  const _debounce = function (...args) {
    // 取消上一次的定时器
    if (timer) clearTimeout(timer);

    // 判断是否需要立即执行
    if (immediate && !isInvoke) {
      fn.apply(this, args);
      isInvoke = true;
    } else {
      // 延迟执行
      timer = setTimeout(() => {
        // 外部传入的真正要执行的函数
        fn.apply(this, args);
        isInvoke = false;
      }, delay);
    }
  };

  return _debounce;
}
