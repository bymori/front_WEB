/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 11:02:08
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 11:03:09
 */

const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views', '02.art');

const html = template(views, {
  name: '张三',
  age: 17,
});
console.log(html);
