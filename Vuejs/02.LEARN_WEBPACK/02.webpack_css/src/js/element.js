/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-10 13:50:40
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-10 14:39:14
 */
// import 'css-loader!../css/style.css';
import '../css/style.css';
import '../css/title.less';

const divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = 'hello 沫沫';

document.body.appendChild(divEl);
