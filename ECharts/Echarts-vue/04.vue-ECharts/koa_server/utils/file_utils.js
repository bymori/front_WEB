/*
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-02 16:08:15
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-03 00:31:21
 */
// 读取文件的工具方法
const fs = require('fs');
module.exports.getFileJsonData = (filePath) => {
  // 根据文件的路径, 读取文件的内容
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        // 读取文件失败
        reject(error);
      } else {
        // 读取文件成功
        resolve(data);
      }
    });
  });
};
