/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-26 14:57:11
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-26 15:34:23
 */
/*
  loader: 1. 下载   2. 使用（配置loader）
  plugins: 1. 下载  2. 引入  3. 使用
*/
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      // loader的配置
    ],
  },
  plugins: [
    // plugins的配置
    // html-webpack-plugin
    // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
    // 需求：需要有结构的HTML文件
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    // 以 ./src/index.html 为模板，创建一个有结构的html文件，自动引入打包输出的所有资源（js、css）
  ],
  mode: 'development',
};
