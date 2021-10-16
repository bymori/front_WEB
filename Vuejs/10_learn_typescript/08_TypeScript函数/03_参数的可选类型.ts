/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 20:17:51
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 20:18:30
 */
// 可选类型是必须写在必选类型的后面的
// y -> undefined | number
function foo(x: number, y?: number) {}

foo(20, 30);
foo(20);
