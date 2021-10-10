/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-10 12:54:11
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-10 14:26:21
 */
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/, //正则表达式
        // 1. loader的写法 （语法糖）
        // loader:'css-loader'

        // 2. 完整写法
        use: [
          // { loader: 'css-loader' },
          'css-loader',
        ],
      },
    ],
  },
};
