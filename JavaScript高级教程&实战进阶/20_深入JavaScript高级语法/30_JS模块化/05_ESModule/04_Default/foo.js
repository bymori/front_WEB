/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-09 16:54:52
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-09 17:03:59
 */
const name = 'momo';
const age = 19;

const foo = 'foo value';

// 1. 默认导出的方式一
export {
  // named export 命名导出
  name,
  age,
  //   foo as default
};

//  2. 默认导出的方式二 更加常见

export default foo;
//  注意: 默认导出只能有一个
