/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 19:04:52
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 19:04:52
 */
const express = require('express');
const path = require('path');
const app = express();

// 实现静态资源访问功能
app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(8888);
