/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 18:34:42
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 18:34:42
 */
const express = require('express');

const admin = express.Router();

admin.get('/index', (req, res) => {
  res.send('欢迎来到博客管理页面');
});

module.exports = admin;
