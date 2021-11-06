/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 16:12:19
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 16:16:55
 */
const express = require('express');
const fs = require('fs');
// 异步 promisify
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);
const app = express();

app.get('/index', async (req, res, next) => {
  try {
    await readFile('./aaa.js');
  } catch (ex) {
    next(ex);
  }

  res.send('程序正常执行');
});

// 错误处理中间
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(8888);
console.log('网站服务器启动成功');
