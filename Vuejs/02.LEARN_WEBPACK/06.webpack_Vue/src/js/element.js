/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-10 13:50:40
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-10 18:35:02
 */
// import 'css-loader!../css/style.css';
import '../css/style.css';
import '../css/title.less';
import '../css/image.css';
import '../font/iconfont.css';

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

//i元素
const iEl = document.createElement('i');
iEl.className = 'iconfont icon-dingyuezhe';

document.body.appendChild(iEl);
document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);
