/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 19:28:44
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-29 19:38:35
 */

/*

1、https://www.npmjs.com/package/mkdirp
2、cnpm i mkdirp --save  /  npm i mkdirp --save 
3、var mkdirp = require('mkdirp');
4、看文档使用

*/

var mkdirp = require('mkdirp');

mkdirp('./tmp/foo/bar/baz').then((made) => console.log(`创建目录，以 ${made}`));
