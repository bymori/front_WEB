/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-30 00:24:21
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-30 00:33:00
 */
const url = require('url');

let Glob = {};

let app = function (req, res) {
  let pathname = url.parse(req.url).pathname;

  if (Glob[pathname]) {
    Glob[pathname](req, res); //执行方法
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
    res.end('页面不存在');
  }
};

app.get = function (string, callback) {
  // 注册方法
  Glob[string] = callback;
};

module.exports = app;
