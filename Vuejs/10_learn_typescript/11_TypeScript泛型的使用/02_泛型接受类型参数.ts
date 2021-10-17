/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-17 00:55:27
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-17 09:39:24
 */

function foo<T, E, O>(arg1: T, arg2: E, arg3?: O, ...args: T[]) {}

foo<number, string, boolean>(10, 'abc', true);
