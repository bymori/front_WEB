/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 11:08:35
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 11:09:50
 */
const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views', '03.art');

const html = template(views, {
  users: [
    { name: '张三', age: 17, sex: '男' },
    { name: '李四', age: 26, sex: '女' },
    { name: '王五', age: 35, sex: '男' },
  ],
});
console.log(html);
