/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-25 00:44:43
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-25 00:44:43
 */
const express = require('express');

const app = express();

app.get('/home', (request, response) => {
  //响应一个页面
  response.sendFile(__dirname + '/index.html');
});

app.get('/data', (request, response) => {
  response.send('用户数据');
});

// nodemon server.js
app.listen(9000, () => {
  console.log('服务已经启动...');
});
