/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-10 13:50:40
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-10 16:17:52
 */
// import 'css-loader!../css/style.css';
import '../css/style.css';
import '../css/title.less';
import '../css/image.css';
import bai from '../img/83989505_p1.png';

const divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = 'hello 沫沫';

//设置背景
const bgDivEl = document.createElement('div');
bgDivEl.className = 'image-bg';

//设置img元素的src
const imgEl = document.createElement('img');
imgEl.src = bai;

document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);
