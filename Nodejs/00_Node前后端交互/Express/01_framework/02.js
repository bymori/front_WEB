/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 15:04:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 15:04:47
 */
// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();

app.get('/request', (req, res, next) => {
  req.name = '张三';
  next();
});

app.get('/request', (req, res) => {
  res.send(req.name);
});

// 监听端口
app.listen(8888);
console.log('网站服务器启动成功');
