/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-09 14:24:48
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-09 14:37:51
 */
console.log('bar');

// define(function () {
//   require(['foo'], function (foo) {
//     console.log('bar', foo);
//   });
// });

define(['foo'], function (foo) {
  //   require(['foo'], function (foo) {
  //     console.log('bar', foo);
  //   });

  console.log('bar', foo);
});
