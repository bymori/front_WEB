/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 11:40:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 11:40:41
 */
const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views', '05.art');

const html = template(views, {
  msg: '首页模板',
});
console.log(html);
