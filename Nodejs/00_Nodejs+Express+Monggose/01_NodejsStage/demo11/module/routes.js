/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 21:41:37
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-29 22:42:41
 */

const fs = require('fs');
const path = require('path');
const url = require('url');

// 私有方法
let getSyncMime = function (extname) {
  var data = fs.readFileSync('./data/mime.json'); //同步方法
  let mimeObj = JSON.parse(data.toString());
  return mimeObj[extname];
};

exports.static = function (req, res, staticPath) {
  //1、获取地址
  let pathname = url.parse(req.url).pathname;
  pathname = pathname == '/' ? '/index.html' : pathname;

  let extname = path.extname(pathname);

  //2、通过fs模块读取文件
  if (pathname != '/favicon.ico') {
    try {
      let data = fs.readFileSync('./' + staticPath + pathname);
      if (data) {
        let mime = getSyncMime(extname);
        res.writeHead(200, {
          'Content-Type': '' + mime + ';charset="utf-8"',
        });
        res.end(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
