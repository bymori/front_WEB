/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-12 13:43:29
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-12 13:43:29
 */
const spanEl = document.querySelector('.span');
const divEl = document.querySelector('.container');

spanEl.addEventListener('click', () => {
  console.log('事件冒泡:span元素被点击了');
});

divEl.addEventListener('click', () => {
  console.log('事件冒泡:div元素被点击了');
});

document.body.addEventListener('click', () => {
  console.log('事件冒泡:body元素被点击了');
});

// 再次监听
spanEl.addEventListener(
  'click',
  (event) => {
    console.log('事件捕获:span元素被点击了');
    event.stopPropagation();
  },
  true
);

divEl.addEventListener(
  'click',
  () => {
    console.log('事件捕获:div元素被点击了');
  },
  true
);

document.body.addEventListener(
  'click',
  (event) => {
    console.log('事件捕获:body元素被点击了');
  },
  true
);
