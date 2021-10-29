/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 16:36:48
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-29 16:42:12
 */
const http = require('http');

const tools = require('./module/tools.js');
console.log(tools);

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-type': "text/html;charset='utf-8'" });
    res.write("<head> <meta charset='UTF-8'></head>");
    res.write('你好 nodejs<br>');
    var api = tools.formatApi('banner');
    res.write(api);
    res.end();
  })
  .listen(8081);
