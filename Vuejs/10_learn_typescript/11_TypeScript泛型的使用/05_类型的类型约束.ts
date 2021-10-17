/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-17 09:51:06
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-17 09:58:26
 */
interface ILength {
  length: number;
}

function getLength<T extends ILength>(arg: T) {
  return arg.length;
}

getLength('abc');
getLength(['abc', 'cba']);
getLength({ length: 100 });
