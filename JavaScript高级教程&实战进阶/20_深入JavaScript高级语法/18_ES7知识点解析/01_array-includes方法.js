/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 11:26:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 11:29:29
 */
const names = ['abc', 'cba', 'nba', 'mba', NaN];

if (names.indexOf('cba') !== -1) {
  console.log('包含abc元素');
}

// ES7 ES2016
if (names.includes('cba', 2)) {
  console.log('包含abc元素 includes');
}

if (names.indexOf(NaN) !== -1) {
  console.log('包含NaN');
}

if (names.includes(NaN)) {
  console.log('包含NaN includes');
}
