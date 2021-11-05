/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-05 23:30:35
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-05 23:30:36
 */

const mongoose = require('mongoose');
// 数据库连接 27017是mongodb数据库的默认端口
mongoose
  .connect('mongodb://localhost/playground', { useNewUrlParser: true })
  .then(() => console.log('数据库连接成功'))
  .catch(() => console.log('数据库连接失败'));
