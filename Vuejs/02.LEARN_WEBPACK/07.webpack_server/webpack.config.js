/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-10 12:54:11
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 01:38:35
 */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  // watch: true, // watch模式 方式一：在导出的配置中，添加`watch:true`
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js',
  },
  devServer: {
    // 21.10.11 默认寻找 ./public 文件夹 无需定义
    // contentBase: './public', //更变为 static
    /* static: {
      directory: path.resolve(__dirname, 'build'),
    }, */
    open: true, //自动打开浏览器
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
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:6].[ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 700 * 1024,
          },
        },
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6].[ext]',
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: '沫沫webpack5',
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'public',
    //       // to: './',
    //       globOptions: {
    //         ignore: ['**/index.html'],
    //       },
    //     },
    //   ],
    // }),
    new VueLoaderPlugin(),
  ],
};
