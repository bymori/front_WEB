/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-11 11:52:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 13:12:02
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const CommonConfig = require('./webpack.comm.config');

module.exports = merge(CommonConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
          // to: './',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
});
