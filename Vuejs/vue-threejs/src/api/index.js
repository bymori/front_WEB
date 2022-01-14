/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-14 22:08:47
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-14 22:45:12
 */
import axios from 'axios';

const request = axios.create({
  baseURL: 'http://api.cpengx.cn/metashop/api',
});

// 相应拦截器
request.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('请求错误');
          break;
        case 401:
          console.log('未授权访问');
          break;
        default:
          console.log('其他错误信息');
      }
    }
    return err;
  }
);

export const getHomepage = (params) => {
  return request({
    method: 'GET',
    url: '/homepage',
    // params 用来配置 query 的参数 ?query=xxx
    params,
  });
};
