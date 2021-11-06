/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 11:48:49
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 11:51:54
 */
const template = require('art-template');
const path = require('path');
const dateFormat = require('dateformat');
// import dateFormat from 'dateformat';

// 设置模板的根目录
template.defaults.root = path.join(__dirname, 'views');

// 导入模板变量
template.defaults.imports.dateFormat = dateFormat;

// 配置模板的默认后缀
template.defaults.extname = '.html';

const html = template('06.art', {
  time: new Date(),
});

console.log(template('07', {}));
console.log(html);
