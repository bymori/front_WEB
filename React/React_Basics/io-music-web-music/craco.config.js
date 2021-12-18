/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 22:08:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-18 22:15:39
 */
const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
    },
  },
};
