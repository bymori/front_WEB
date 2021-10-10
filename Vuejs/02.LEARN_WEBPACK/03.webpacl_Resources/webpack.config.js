/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-10 12:54:11
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-10 18:08:28
 */
const path = require('path');

module.exports = {
  // mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    // assetModuleFilename: 'img/[name]_[hash:6].[ext]',
    // publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      /* {
        // test: /\.(jpg|jpeg|png|gif|svg)$/,
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name]_[hash:6].[ext]',
              // outputPath: 'img',
              publicPath: './build',
              esModule: false,
            },
          },
        ],
        type: 'javascript/auto',
      }, */
      /* {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'img/[name]_[hash:6].[ext]',
              publicPath: './build',
              limit: 700 * 1024, //小于700kb的图片 生成base64
              esModule: false,
            },
          },
        ],
        type: 'javascript/auto',
      }, */
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:6].[ext]',
          publicPath: './build/',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 700 * 1024,
          },
        },
      },
    ],
  },
};
