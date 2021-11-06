/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 18:59:26
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 19:03:23
 */
const express = require('express');
const app = express();

app.get('/index/:id/:name/:age', (req, res) => {
  // 路由参数
  res.send(req.params);
  // http://localhost:8888/index/111/momo/99
  // 三个参数必须全部传递
});

app.listen(8888);
