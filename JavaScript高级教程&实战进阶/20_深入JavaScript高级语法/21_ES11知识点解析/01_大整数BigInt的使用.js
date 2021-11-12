/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 14:31:44
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 14:31:45
 */
// ES11之前 max_safe_integer
const maxInt = Number.MAX_SAFE_INTEGER;
console.log(maxInt); // 9007199254740991
console.log(maxInt + 1);
console.log(maxInt + 2);

// ES11之后: BigInt
const bigInt = 900719925474099100n;
console.log(bigInt + 10n);

const num = 100;
console.log(bigInt + BigInt(num));

const smallNum = Number(bigInt);
console.log(smallNum);
