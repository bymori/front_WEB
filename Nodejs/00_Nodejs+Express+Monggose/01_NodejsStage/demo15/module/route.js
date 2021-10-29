/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-30 00:24:21
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-30 01:33:17
 */
const url = require('url');
const fs = require('fs');
const path = require('path');

//扩展res
function changeRes(res) {
  res.send = (data) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
    res.end(data);
  };
}

//根据后缀名获取文件类型
function getFileMime(extname) {
  var data = fs.readFileSync('./data/mime.json'); //同步方法
  let mimeObj = JSON.parse(data.toString());
  return mimeObj[extname];
}
//静态web服务的方法
function initStatic(req, res, staticPath) {
  //1、获取地址
  let pathname = url.parse(req.url).pathname;
  // pathname = pathname == '/' ? '/index.html' : pathname;
  let extname = path.extname(pathname);
  //2、通过fs模块读取文件

  if (extname) {
    //如果有后缀名用静态web服务处理
    try {
      let data = fs.readFileSync('./' + staticPath + pathname);
      if (data) {
        let mime = getFileMime(extname);
        res.writeHead(200, { 'Content-Type': '' + mime + ';charset="utf-8"' });
        res.end(data);
      }
    } catch (error) {
      // console.log(error);
    }
  }
}

let server = () => {
  let Glob = {
    _get: {},
    _post: {},
    staticPath: 'static', //，默认静态web目录
  };

  let app = function (req, res) {
    //扩展res的方法
    changeRes(res);

    //配置静态web服务
    initStatic(req, res, Glob.staticPath);

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

  //get请求
  app.get = function (string, callback) {
    // 注册方法
    Glob._get[string] = callback;
  };

  //post请求
  app.post = function (string, callback) {
    // 注册方法
    Glob._post[string] = callback;
  };

  //静态web服务的方法
  app.static = function (staticPath) {
    Glob.staticPath = staticPath;
  };

  return app;
};

module.exports = server();
