/*
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-02 16:08:14
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-03 00:30:53
 */
// 设置响应头的中间件
module.exports = async (ctx, next) => {
  const contentType = 'application/json; charset=utf-8';
  ctx.set('Content-Type', contentType);
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE');
  await next();
};
