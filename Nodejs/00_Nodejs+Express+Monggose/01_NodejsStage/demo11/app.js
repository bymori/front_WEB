/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 21:27:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-29 23:30:46
 */

const http = require('http');
const path = require('path');
const routes = require('./module/routes');
const url = require('url');
const ejs = require('ejs');

http
  .createServer(function (req, res) {
    //创建静态web服务
    routes.static(req, res, 'static');

    //路由
    let pathName = url.parse(req.url).pathname;

    if (pathName == '/login') {
      // let msg = '数据库里面获取的数据';
      // let list = [
      //   {
      //     title: '新闻111',
      //   },
      //   {
      //     title: '新闻222',
      //   },
      //   {
      //     title: '新闻3333',
      //   },
      //   {
      //     title: '新闻4444',
      //   },
      //   {
      //     title: '新闻5555',
      //   },
      // ];
      // ejs.renderFile(
      //   './views/login.ejs',
      //   {
      //     msg: msg,
      //     list: list,
      //   },
      //   (err, data) => {
      //     res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
      //     res.end(data);
      //   }
      // );
      ejs.renderFile('./views/form.ejs', {}, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
        res.end(data);
      });
    } else if (pathName == '/doLogin') {
      //获取post传值
      let postData = '';
      req.on('data', (chunk) => {
        postData += chunk;
      });
      req.on('end', () => {
        console.log(postData);
        res.end(postData);
      });
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
