/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 18:58:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 19:01:02
 */
// let message: string | null = null;
let message: string | null = 'Hello World';

const content = message ?? '你好啊, 默认值';
// const content = message ? message: "你好啊, 默认值"
console.log(content);
