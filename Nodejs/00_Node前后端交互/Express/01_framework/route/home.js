/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 18:34:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 18:34:46
 */
const express = require('express');

const home = express.Router();

home.get('/index', (req, res) => {
  res.send('欢迎来到博客首页页面');
});

module.exports = home;
