/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 15:21:01
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 15:27:58
 */
const express = require('express');
const app = express();

// 网站公告
// app.use((req, res, next) => {
//   res.send('当前网站正在维护...');
// });

app.use('/admin', (req, res, next) => {
  // 用户没有登录
  let isLogin = true;
  // 如果用户登录
  if (isLogin) {
    // 让请求继续向下执行
    next();
  } else {
    // 如果用户没有登录 直接对客户端做出响应
    res.send('您还没有登录 不能访问/admin这个页面');
  }
});

app.get('/admin', (req, res) => {
  res.send('您已经登录 可以访问当前页面');
});

app.use((req, res, next) => {
  // 为客户端响应404状态码以及提示信息
  res.status(404).send('当前访问的页面是不存在的');
});
app.listen(8888);
console.log('网站服务器启动成功');
