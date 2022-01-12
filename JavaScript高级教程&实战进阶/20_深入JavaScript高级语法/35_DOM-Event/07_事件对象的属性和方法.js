/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-12 13:45:17
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-12 14:00:48
 */
const spanEl = document.querySelector('.span');

spanEl.addEventListener('click', (event) => {
  console.log('span元素被点击:', event);
  console.log('事件的类型:', event.type);
  console.log(
    '事件的元素:',
    event.target.nodeName,
    event.currentTarget.nodeName
  );
  console.log('事件发生的位置:', event.offsetX, event.offsetY);
  console.log();
});

const divEl = document.querySelector('.container');
divEl.addEventListener('click', (event) => {
  console.log(
    'div元素被点击:',
    event.target.nodeName,
    event.currentTarget.nodeName
  );
});

// 常见的方法
// preventDefault
const aEl = document.querySelector('a');
aEl.addEventListener('click', (event) => {
  event.preventDefault();
});
