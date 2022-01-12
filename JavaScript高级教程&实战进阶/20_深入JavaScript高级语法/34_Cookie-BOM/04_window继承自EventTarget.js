/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-12 09:40:49
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-12 09:42:09
 */
// const clickHandler = () => {
//   console.log('window发生了点击');
// };

// window.addEventListener('click', clickHandler);
// window.removeEventListener('click', clickHandler);

window.addEventListener('momo', () => {
  console.log('监听到了momo事件');
});
window.dispatchEvent(new Event('momo'));
