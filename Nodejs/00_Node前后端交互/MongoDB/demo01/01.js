/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-05 19:14:24
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-05 19:19:02
 */

// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose
  .connect('mongodb://localhost/playground', { useNewUrlParser: true })
  // 连接成功
  .then(() => console.log('数据库连接成功'))
  // 连接失败
  .catch((err) => console.log(err, '数据库连接失败'));
