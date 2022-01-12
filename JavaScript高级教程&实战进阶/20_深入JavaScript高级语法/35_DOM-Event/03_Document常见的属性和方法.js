/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-12 12:28:47
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-12 12:34:25
 */
// 常见的属性
console.log(document.body);
console.log(document.title);
document.title = 'Hello World';

console.log(document.head);
console.log(document.children[0]);

console.log(window.location);
console.log(document.location);
console.log(window.location === document.location);

// 常见的方法
// 创建元素
const imageEl = document.createElement('img'); // 使用 DOM HTMLImageElement
imageEl.src = 'image1.png';
imageEl.alt = 'alt';
imageEl.title = '这是 image1';
document.body.appendChild(imageEl);
// const imageEl2 = new HTMLImageElement();

// 获取元素
const divEl1 = document.getElementById('box');
const divEl2 = document.getElementsByTagName('div');
const divEl3 = document.getElementsByName('title');
const divEl4 = document.querySelector('.content');
const divEl5 = document.querySelectorAll('.content');

console.log(divEl1, divEl2, divEl3, divEl4, divEl5);
