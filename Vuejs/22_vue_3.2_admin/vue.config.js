/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 15:05:03
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-26 15:05:04
 */
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
  configureWebpack: (config) => {
    config.plugins.push(
      AutoImport({
        resolvers: [ElementPlusResolver()]
      })
    );
    config.plugins.push(
      Components({
        resolvers: [ElementPlusResolver()]
      })
    );
  }
};
