/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 17:54:07
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-29 18:05:09
 */
/*

1、https://www.npmjs.com/package/silly-datetime
2、npm i silly-datetime --save
3、var sd = require('silly-datetime');
4、看文档使用
5、指定包的版本（非常重要）
    npm install node-media-server@2.1.0 --save
    npm install jquery@1.8.0
6、 npm i / cnpm i表示 如果删掉node_modules可以通过此命令重新安装 package.json对应的所有的包信息

*/

var sd = require('silly-datetime');
var md5 = require('md5');
var d = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');

console.log(d);

console.log(md5(d));
