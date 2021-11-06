/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 18:32:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 18:37:36
 */
// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();

const home = require('./route/home');
const admin = require('./route/admin');

app.use('/home', home);
app.use('/admin', admin);
//  http://localhost:8888/admin/index

// 端口监听
app.listen(8888);
