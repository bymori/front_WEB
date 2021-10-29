/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 21:41:37
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-29 22:07:37
 */
exports.getMime = function (extname) {
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    default:
      return 'text/html';
  }
};

const fs = require('fs');

exports.getFileMime = function (extname) {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/mime.json', (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      let mimeObj = JSON.parse(data.toString());
      // console.log(mimeObj[extname]);
      resolve(mimeObj[extname]);
    });
  });
};

exports.getSyncMime = function (extname) {
  var data = fs.readFileSync('./data/mime.json'); //同步方法
  let mimeObj = JSON.parse(data.toString());
  return mimeObj[extname];
};
