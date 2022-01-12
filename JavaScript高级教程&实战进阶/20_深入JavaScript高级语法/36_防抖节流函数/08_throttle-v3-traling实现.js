/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-12 22:42:04
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-12 23:25:29
 */
function throttle(fn, interval, options = { leading: true, trailing: false }) {
  const { leading, trailing } = options;
  // 1.记录上一次的开始时间
  let lastTime = 0;
  let timer = null;

  // 2.事件触发时, 真正执行的函数
  const _throttle = function () {
    // 2.1.获取当前事件触发时的时间
    const nowTime = new Date().getTime();
    if (!lastTime && !leading) lastTime = nowTime;

    // 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数
    const remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      // 2.3.真正触发函数
      fn();
      // 2.4.保留上次触发的时间
      lastTime = nowTime;
      return;
    }

    if (trailing && !timer) {
      timer = setTimeout(() => {
        timer = null;
        lastTime = !leading ? 0 : new Date().getTime();
        fn();
      }, remainTime);
    }
  };

  return _throttle;
}
