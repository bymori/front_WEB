/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 18:43:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 18:49:23
 */
const express = require('express');
const app = express();

// 拦截所有请求
// extended: false 方法内部使用querystring模块处理请求参数的格式
// extended: true 方法内部使用第三方模块qs处理请求参数的格式
app.use(express.urlencoded({ extended: false }));

app.post('/add', (req, res) => {
  // 接收post请求参数
  res.send(req.body);
});

app.listen(8888);
