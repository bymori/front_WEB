/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-23 16:39:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-23 16:41:57
 */
// import * as m1 from "./hello.js";
//获取元素

const btn = document.getElementById('btn');

btn.onclick = function () {
  import('./hello.js').then((module) => {
    module.hello();
  });
};