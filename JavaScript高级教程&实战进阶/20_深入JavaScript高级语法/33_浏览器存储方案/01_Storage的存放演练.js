/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-11 00:15:33
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-11 14:27:00
 */
const loginBtn = document.querySelector('button');

loginBtn.onclick = function () {
  localStorage.setItem('name', 'localStorage');
  sessionStorage.setItem('name', 'sessionStorage');
};
