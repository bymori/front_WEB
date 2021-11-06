/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 10:35:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 12:06:10
 */
// 引入模板引擎
const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'view', 'index.art');

/**
 * template(filename, content) 根据模板名渲染模板。
 *  参数：
 *      {string} filename
 *      {Object,string} content
 *  返回值：
 *      如果 content 为 Object，则渲染模板并返回 string
 *      如果 content 为 string，则编译模板并返回 function
 */
const html = template(views, {
  name: '张三',
  age: 20,
  content: '<h1>我是标题</h1>',
});
console.log(html);
