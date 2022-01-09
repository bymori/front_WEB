/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-09 15:43:22
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-09 15:54:16
 */
// 1. 导出方式一
// import { add, sub } from './math.js';
// import { timeFormat, priceFormat } from './format.js';

// export { add, sub, timeFormat, priceFormat };

// 2. 导出方式二
// export { add, sub } from './math.js';
// export { timeFormat, priceFormat } from './format.js';

// 3. 导出方式三

export * from './math.js';
export * from './format.js';
