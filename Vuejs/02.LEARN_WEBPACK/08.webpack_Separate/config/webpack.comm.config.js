/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-11 11:52:51
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 13:10:45
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
  target: 'web',
  // watch: true, // watch模式 方式一：在导出的配置中，添加`watch:true`
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/bundle.js',
  },
  resolve: {
    // modules: ['node_ modules'],
    extensions: ['.js', '.json', '.mjs', '.vue', '.ts', '.jsx', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      js: path.resolve(__dirname, '../src/js'),
    },
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
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: '沫沫webpack5',
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new VueLoaderPlugin(),
  ],
};
