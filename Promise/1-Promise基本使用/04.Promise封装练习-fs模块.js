/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-25 14:25:10
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-25 14:30:04
 */
/**
 * 封装一个函数 mineReadFile 读取文件内容
 * 参数:  path  文件路径
 * 返回:  promise 对象
 */

function mineReadFile(path) {
  return new Promise((resolve, reject) => {
    //读取文件
    require('fs').readFile(path, (err, data) => {
      //判断
      if (err) reject();
      //成功
      resolve(data);
    });
  });
}

mineReadFile('./1-Promise基本使用/resource/content.txt').then(
  (value) => {
    //输出文件内容
    console.log(value.toString());
  },
  (reason) => {
    console.warn(reason);
  }
);
