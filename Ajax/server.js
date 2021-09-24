/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-23 16:58:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-25 01:37:34
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

//jQuery 服务
app.all('/jquery-server', (request, response) => {
  //设置响应头  设置允许跨域
  response.header('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  // response.send('Hello jQuery AJAX');
  const data = { name: '沫沫jquery' };
  response.send(JSON.stringify(data));
});

//axios 服务
app.all('/axios-server', (request, response) => {
  //设置响应头  设置允许跨域
  response.header('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  // response.send('Hello jQuery AJAX');
  const data = { name: '沫沫axios' };
  response.send(JSON.stringify(data));
});
//fetch 服务
app.all('/fetch-server', (request, response) => {
  //设置响应头  设置允许跨域
  response.header('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  // response.send('Hello jQuery AJAX');
  const data = { name: '沫沫fetch' };
  response.send(JSON.stringify(data));
});

//jsonp 服务
app.all('/jsonp-server', (request, response) => {
  // response.send('console.log("沫沫jsonps")');
  const data = {
    name: '沫沫jsonp',
  };
  //将数据转化为字符串
  let str = JSON.stringify(data);
  //返回结果
  response.end(`handle(${str})`);
});

//用户名检测是否存在
app.all('/check-username', (request, response) => {
  // response.send('console.log("沫沫jsonps")');
  const data = {
    exist: 1,
    msg: '用户名已存在，请重新输入',
  };
  //将数据转化为字符串
  let str = JSON.stringify(data);
  //返回结果
  response.end(`handle(${str})`);
});
//jQuery-jsonp
app.all('/jquery-jsonp-server', (request, response) => {
  // response.send('console.log("沫沫jsonps")');
  const data = {
    website: 'ioinn.cn',
    name: ['末日', '沫沫', '千凉'],
  };
  //将数据转化为字符串
  let str = JSON.stringify(data);
  //接收 callback 参数
  let cb = request.query.callback;
  //返回结果
  response.end(`${cb}(${str})`);
});

//cors
app.all('/cors-server', (request, response) => {
  //设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Allow-Method', '*');
  
  // response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  response.send('hello CORS');
});

//4. 监听端口启动服务
// 启动服务 node server.js
// nodemon server.js
app.listen(8000, () => {
  console.log('服务已经启动, 8000 端口监听中....');
});
