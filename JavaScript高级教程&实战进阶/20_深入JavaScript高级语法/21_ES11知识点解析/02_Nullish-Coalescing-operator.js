/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 16:23:02
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 16:46:22
 */
// ES11: 空值合并运算 ??

// const foo = undefined;
const foo = 0;

// const bar = foo || 'default value';
const bar = foo ?? 'default value';

console.log(bar);

// ts 是 js 的超集
