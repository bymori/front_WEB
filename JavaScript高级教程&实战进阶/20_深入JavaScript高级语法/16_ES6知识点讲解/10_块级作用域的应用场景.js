/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 19:51:04
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 19:54:50
 */
const btns = document.getElementsByTagName('button');

// for (var i = 0; i < btns.length; i++) {
//   (function (n) {
//     btns[i].onclick = function () {
//       console.log('第' + n + '个按钮被点击');
//     };
//   })(i);
// }
// console.log(i);

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    console.log('第' + (i + 1) + '个按钮被点击');
  };
}
console.log(i);
