/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-12 12:01:36
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-12 12:03:06
 */
document.addEventListener('click', () => {
  console.log('document被点击');
});

const divEl = document.querySelector('#box');
const spanEl = document.querySelector('.content');

divEl.addEventListener('click', () => {
  console.log('div元素被点击');
});

spanEl.addEventListener('click', () => {
  console.log('span元素被点击');
});
