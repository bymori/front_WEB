/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-12 12:37:56
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-12 12:39:00
 */
const divEl = document.querySelector('#box');

// 常见的属性
console.log('id ', divEl.id);
console.log('tagName ', divEl.tagName);
console.log('children ', divEl.children);
console.log('className ', divEl.className);
console.log('classList ', divEl.classList);
console.log('clientWidth ', divEl.clientWidth);
console.log('clientHeight ', divEl.clientHeight);
console.log('offsetLeft ', divEl.offsetLeft);
console.log('offsetTop ', divEl.offsetTop);

// 常见的方法
const value = divEl.getAttribute('age');
console.log(value);
divEl.setAttribute('height', 1.88);
