/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 19:24:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 19:25:51
 */
const express = require('express');
const path = require('path');
const app = express();

// 模板配置
app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

app.locals.users = [
  {
    name: '沫沫',
    age: 18,
  },
  {
    name: '末日',
    age: 26,
  },
];

app.get('/index', (req, res) => {
  res.render('index', {
    msg: 'message',
  });
});

app.get('/list', (req, res) => {
  res.render('list', {
    msg: 'list page',
  });
});

app.listen(8888);
