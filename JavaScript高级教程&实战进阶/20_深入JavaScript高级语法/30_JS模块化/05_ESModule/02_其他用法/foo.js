/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-09 15:19:42
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-09 15:38:07
 */
// 1. 第一种方式: export 声明语句
// export const name = 'momo';
// export const age = 19;

// export function foo() {
//   console.log('foo function');
// }

// export class Person {}

//  2. 第二种方式 export 导出 和 声明 分开编写
const name = 'momo';
const age = 19;

function foo() {
  console.log('foo function');
}

export { name, age, foo };

//  3. 第三种方式 第二种导出时起别名 as
// export { name as FName, age as GAge, foo as FFoo };
