/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 16:33:54
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-29 16:35:00
 */
const http = require('http');

//https://api.ioinn.cn/banner

function formatApi(api) {
  return 'https://api.ioinn.cn/' + api;
}

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-type': "text/html;charset='utf-8'" });
    res.write("<head> <meta charset='UTF-8'></head>");
    res.write('你好 nodejs<br>');
    var api = formatApi('banner');
    res.write(api);
    res.end();
  })
  .listen(8081);
