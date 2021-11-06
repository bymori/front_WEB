/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 12:51:01
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 12:51:01
 */
const mongoose = require('mongoose');
// 连接数据库
mongoose
  .connect('mongodb://localhost/playground', { useNewUrlParser: true })
  .then(() => console.log('数据库连接成功'))
  .catch(() => console.log('数据库连接失败'));
