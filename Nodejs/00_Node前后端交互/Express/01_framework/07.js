/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 16:50:08
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 16:56:11
 */
// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();
// 创建路由对象
const home = express.Router();
// 为路由对象匹配请求路径
app.use('/home', home);
// 创建二级路由
home.get('/index', (req, res) => {
  //  http://localhost:8888/home/index
  res.send('欢迎来到博客首页页面');
});

// 端口监听
app.listen(8888);
