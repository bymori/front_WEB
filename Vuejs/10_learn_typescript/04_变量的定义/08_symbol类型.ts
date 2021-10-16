/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 16:03:29
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 16:05:41
 */
const title1 = Symbol('title');
const title2 = Symbol('title');

const info = {
  [title1]: '程序员',
  [title2]: '老师',
};

console.log(info);
console.log(info[title1]);
console.log(info[title2]);

export {};
