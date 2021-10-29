/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 21:27:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-30 00:05:58
 */

const http = require('http');
const routes = require('./module/routes');
const url = require('url');
const path = require('path');

http
  .createServer(function (req, res) {
    //创建静态web服务
    routes.static(req, res, 'static');
    //路由
    let pathname = url.parse(req.url).pathname.replace('/', '');

    let extname = path.extname(pathname);
    console.log(extname);
    if (!extname) {
      try {
        routes[pathname](req, res);
      } catch (error) {
        routes['error'](req, res);
      }
    }
  })
  .listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
