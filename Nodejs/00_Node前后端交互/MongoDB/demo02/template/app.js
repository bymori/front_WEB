/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 12:03:59
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 12:03:59
 */

// 导入模板引擎
const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views', 'index.art');

const html = template(views, {
  name: '张三',
  age: 20,
});

console.log(html);
