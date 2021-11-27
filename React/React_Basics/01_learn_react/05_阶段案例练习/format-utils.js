/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-27 22:00:06
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-27 22:07:23
 */
function formatPrice(price) {
  if (typeof price !== 'number') {
    price = Number('aaa') || 0;
    // 'aaa' 无法转换为 Number 类型 非数字类型文本 会转换为 NaN
  }

  return '¥' + price.toFixed(2);
}
