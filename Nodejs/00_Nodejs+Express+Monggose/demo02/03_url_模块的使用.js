/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 14:01:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-29 14:04:35
 */
const url = require('url');

var api = 'http://ioinn.cn/?name=zhangsan&age=19';

console.log(url.parse(api, true));

var getValue = url.parse(api, true).query;

console.log(getValue);

console.log(`姓名：${getValue.name}--年龄:${getValue.age}`);
