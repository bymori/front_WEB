/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-14 18:22:33
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 18:24:59
 */

const info = { counter: 100 };

function doubleCounter() {
  console.log(info.counter * 2);
}

doubleCounter();

info.counter++;
doubleCounter();
