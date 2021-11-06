/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 15:32:57
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 15:58:09
 */
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/index', (req, res, next) => {
  //   throw new Error('程序发生了未知错误');
  fs.readFile('./01.js', 'utf8', (err, result) => {
    if (err != null) {
      next(err);
    } else {
      res.send(result);
    }
  });

  // res.send('程序正常执行')
});

// 错误处理中间
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(8888);
console.log('网站服务器启动成功');
