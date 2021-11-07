/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 12:34:14
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 12:34:15
 */

function outer() {
  function inner() {
    var inner = 'inners';
    console.log(inner);
  }
}

outer();
