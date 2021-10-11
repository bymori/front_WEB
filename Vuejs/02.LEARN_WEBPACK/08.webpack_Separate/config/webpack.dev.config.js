/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-11 11:52:07
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 12:10:04
 */
const { merge } = require('webpack-merge');
const CommonConfig = require('./webpack.comm.config');

module.exports = merge(CommonConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    // 21.10.11 默认寻找 ./public 文件夹 无需定义
    // contentBase: './public', //更变为 static
    /* static: {
      directory: path.resolve(__dirname, 'build'),
    }, */
    open: true, //自动打开浏览器
    hot: true, // 开启 HMR
    // host: '0.0.0.0', //主机地址
    port: 8000, //端口
    // compress: true, //gzip压缩

    proxy: {
      '/api': {
        //将target印射为/api
        target: 'https://api.ioinn.cn', // 接口域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/api': '', //需要rewrite的,
        },
      },
    },
  },
});
