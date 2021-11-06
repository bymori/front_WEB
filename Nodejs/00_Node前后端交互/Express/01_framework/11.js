/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 18:54:17
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 18:57:32
 */
const express = require('express');
const app = express();

app.use(fn({ a: 2 }));

function fn(obj) {
  return function (req, res, next) {
    if (obj.a == 1) {
      console.log(req.url);
    } else {
      console.log(req.method);
    }
    next();
  };
}

app.post('/', (req, res) => {
  // 接收post请求参数
  res.send(req.body);
});

app.listen(8888);
