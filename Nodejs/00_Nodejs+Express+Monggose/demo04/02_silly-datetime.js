/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 17:49:10
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-29 17:50:11
 */
/*

1、https://www.npmjs.com/package/silly-datetime
2、npm i silly-datetime --save
3、var sd = require('silly-datetime');
4、看文档使用

*/

var sd = require('silly-datetime');
var d = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');

console.log(d);
