/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-10 12:54:11
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-10 15:19:39
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
          // 注意 style-loader 需要在 css-loader 的前面
          'style-loader',
          'css-loader',
          'postcss-loader',
          /* {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')],
              },
            },
          }, */
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      /* {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      }, */
    ],
  },
};
