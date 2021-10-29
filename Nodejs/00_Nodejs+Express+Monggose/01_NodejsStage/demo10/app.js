/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 21:27:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-29 22:43:40
 */

const http = require('http');
const path = require('path');
const routes = require('./module/routes');
const url = require('url');

http
  .createServer(function (req, res) {
    //创建静态web服务
    routes.static(req, res, 'static');

    //路由
    let pathName = url.parse(req.url).pathname;

    if (pathName == '/login') {
      res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
      res.end('执行登录');
    } else if (pathName == '/register') {
      res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
      res.end('执行注册');
    } else if (pathName == '/admin') {
      res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
      res.end('处理后的业务逻辑');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
      // res.end('404');
    }
  })
  .listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
