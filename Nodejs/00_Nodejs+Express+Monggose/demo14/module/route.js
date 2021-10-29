/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-30 00:24:21
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-30 01:07:06
 */
const url = require('url');

function changeRes(res) {
  res.send = (data) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
    res.end(data);
  };
}

let server = () => {
  let Glob = {};
  //把get 和 post分开
  Glob._get = {};
  Glob._post = {};

  let app = function (req, res) {
    //扩展res的方法
    changeRes(res);

    let pathname = url.parse(req.url).pathname;
    //获取请求类型
    let method = req.method.toLowerCase();

    if (Glob['_' + method][pathname]) {
      if (method == 'get') {
        Glob['_' + method][pathname](req, res); //执行方法
      } else {
        //post  获取post的数据 把它绑定到req.body
        let postData = '';
        req.on('data', (chunk) => {
          postData += chunk;
        });
        req.on('end', () => {
          req.body = postData;
          Glob['_' + method][pathname](req, res); //执行方法
        });
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
      res.end('页面不存在');
    }
  };

  app.get = function (string, callback) {
    // 注册方法
    Glob._get[string] = callback;
  };
  app.post = function (string, callback) {
    // 注册方法
    Glob._post[string] = callback;
  };

  return app;
};

module.exports = server();
