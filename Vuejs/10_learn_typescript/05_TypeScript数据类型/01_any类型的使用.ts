/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 16:06:44
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 16:09:16
 */
// 当进行一些类型断言 as any
// 在不想给某些JavaScript添加具体的数据类型时(原生的JavaScript代码是一样)
let message: any = 'Hello World';

message = 123;
message = true;
message = {};

// message()
// message.split(" ")

console.log(message);
// const arr: any[] = [];
