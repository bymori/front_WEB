/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-17 09:40:25
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-17 09:46:10
 */
interface IPerson<T1 = string, T2 = number> {
  name: T1;
  age: T2;
}

const p: IPerson = {
  name: 'ioinn',
  age: 18,
};
