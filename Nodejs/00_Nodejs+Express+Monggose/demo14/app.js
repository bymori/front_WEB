/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-30 00:09:30
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-30 01:08:28
 */

const http = require('http');
const app = require('./module/route');
const ejs = require('ejs');

//注册web服务
http.createServer(app).listen(8081);

//配置路由
app.get('/', function (req, res) {
  res.send('首页-home-/');
});

//配置路由
app.get('/login', function (req, res) {
  // res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
  // res.end('执行登录操作');
  ejs.renderFile('./views/form.ejs', {}, (err, data) => {
    res.send(data);
  });
});

//配置路由
app.get('/news', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
  res.end('新闻页面');
});

app.post('/doLogin', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});
