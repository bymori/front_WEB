/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 22:53:54
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 22:53:54
 */
const num1 = 100; // 十进制

// b -> binary
const num2 = 0b100; // 二进制
// o -> octonary
const num3 = 0o100; // 八进制
// x -> hexadecimal
const num4 = 0x100; // 十六进制

console.log(num1, num2, num3, num4);

// 大的数值的连接符(ES2021 ES12)
const num = 10_000_000_000_000_000;
console.log(num);
