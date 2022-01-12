/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-12 12:40:03
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-12 12:41:13
 */
function divClick() {
  console.log('div元素被点击2');
}

const divEl = document.querySelector('.box');

// DOM0
divEl.onclick = function () {
  console.log('div元素被点击3');
};

// DOM2
divEl.addEventListener('click', () => {
  console.log('div元素被点击4');
});
divEl.addEventListener('click', () => {
  console.log('div元素被点击5');
});
divEl.addEventListener('click', () => {
  console.log('div元素被点击6');
});
