/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 18:00:00
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 18:03:56
 */
// number|string 联合类型

function printID(id: number | string | boolean) {
  // 使用联合类型的值时, 需要特别的小心

  // narrow: 缩小范围
  if (typeof id === 'string') {
    // TypeScript帮助确定id一定是string类型
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printID(123);
printID('abc');
printID(true);
