/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 11:21:42
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 11:21:42
 */
const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views', '04.art');

const html = template(views, {
  msg: '我是首页',
});
console.log(html);
