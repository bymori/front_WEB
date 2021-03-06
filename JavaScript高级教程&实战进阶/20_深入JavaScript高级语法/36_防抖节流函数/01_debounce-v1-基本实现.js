/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-12 14:02:47
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-12 17:28:48
 */
// const divEl = document.querySelector('#cancel');

// divEl.addEventListener('click', () => {
//   console.log('div元素被点击');
// });

// setInterval(() => {
//   document.querySelector('#cancel').click();
// }, 1000);

function debounce(fn, delay) {
  // 1.定义一个定时器, 保存上一次的定时器
  let timer = null;

  // 2.真正执行的函数
  const _debounce = function () {
    // 取消上一次的定时器
    if (timer) clearTimeout(timer);
    // 延迟执行
    timer = setTimeout(() => {
      // 外部传入的真正要执行的函数
      fn();
    }, delay);
  };

  return _debounce;
}
