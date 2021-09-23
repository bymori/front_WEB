/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-23 16:58:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-23 19:12:13
 */
//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
  //设置响应头  设置允许跨域
  response.header('Access-Control-Allow-Origin', '*');

  //设置响应体
  response.send('HELLO AJAX - 2');
});

// app.post('/server', (request, response) => {
//all 可以接收任意类型的请求
app.all('/server', (request, response) => {
  //设置响应头  设置允许跨域
  response.header('Access-Control-Allow-Origin', '*');

  //响应头
  response.setHeader('Access-Control-Allow-Headers', '*');
  //设置响应体
  response.send('HELLO AJAX - POST');
});

app.all('/json-server', (request, response) => {
  //设置响应头  设置允许跨域
  response.header('Access-Control-Allow-Origin', '*');
  //响应头
  response.setHeader('Access-Control-Allow-Headers', '*');
  //响应一个数据
  const data = {
    name: '沫沫',
  };
  //对 对象进行字符串转换
  let str = JSON.stringify(data);
  //设置响应体
  response.send(str);
});

//针对ie缓存
app.get('/ie', (request, response) => {
  //设置响应头  设置允许跨域
  response.header('Access-Control-Allow-Origin', '*');

  //设置响应体
  response.send('HELLO AJAX ie234');
});

//针对延迟响应
app.get('/delay', (request, response) => {
  //设置响应头  设置允许跨域
  response.header('Access-Control-Allow-Origin', '*');
  setTimeout(() => {
    //设置响应体
    response.send('HELLO AJAX 延迟了');
  }, 3000);
});

//4. 监听端口启动服务
// 启动服务 node server.js
// nodemon server.js
app.listen(8000, () => {
  console.log('服务已经启动, 8000 端口监听中....');
});
