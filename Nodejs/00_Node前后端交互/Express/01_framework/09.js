/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 18:40:22
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 18:42:25
 */
const express = require('express');
const app = express();

app.get('/index', (req, res) => {
  // 获取get请求参数
  res.send(req.query);
  // http://localhost:8888/index?name=zhangsan&age=18
  // {"name":"zhangsan","age":"18"}
});

app.listen(8888);
