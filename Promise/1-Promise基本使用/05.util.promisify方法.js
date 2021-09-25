/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-25 14:31:18
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-25 14:33:42
 */

/**
 * util.promisify 方法
 */

//引入 util 模块
const util = require('util');
//引入 fs 模块
const fs = require('fs');
//返回一个新的函数
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./1-Promise基本使用/resource/content.txt').then((value) => {
  console.log(value.toString());
});
