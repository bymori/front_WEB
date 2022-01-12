/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-12 11:11:07
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-12 11:33:25
 */
const jumpBtn = document.querySelector('#jump');

jumpBtn.onclick = function () {
  //   location.href = './demo.html';

  // 跳转(不刷新网页)
  //   history.pushState({ name: 'momo' }, '', '/detail');
  history.replaceState({ name: 'momo' }, '', '/detail');
};
