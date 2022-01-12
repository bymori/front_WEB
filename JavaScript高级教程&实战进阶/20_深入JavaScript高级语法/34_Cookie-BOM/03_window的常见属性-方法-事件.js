/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-12 00:09:07
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-12 09:35:55
 */
// 1.常见的属性
// console.log('screenX ', window.screenX);
// console.log('screenY ', window.screenY);

// window.addEventListener('scroll', () => {
//   console.log('scrollX', window.scrollX, 'scrollY', window.scrollY);
// });

// console.log('outerHeight ', window.outerHeight);
// console.log('innerHeight ', window.innerHeight);

// 2.常见的方法
// const scrollBtn = document.querySelector('#scroll');
// scrollBtn.onclick = function () {
//   // 1.scrollTo
//   //   window.scrollTo({ top: 2000 });

//   // 2.close
//   //   window.close();

//   // 3.open
//   window.open('http://www.baidu.com', '_self');
// };

// 3.常见的事件
window.onload = function () {
  console.log('window窗口加载完毕~');
};

window.onfocus = function () {
  console.log('window窗口获取焦点~');
};

window.onblur = function () {
  console.log('window窗口失去焦点~');
};

const hashChangeBtn = document.querySelector('#hashchange');
hashChangeBtn.onclick = function () {
  location.hash = 'aaaa';
};
window.onhashchange = function () {
  console.log('hash发生了改变');
};
