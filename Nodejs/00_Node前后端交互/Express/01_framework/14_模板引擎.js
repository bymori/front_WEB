/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 19:09:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 19:22:58
 */
const express = require('express');
const path = require('path');
const app = express();

// 1.告诉express框架使用什么模板引擎渲染什么后缀的模板文件
//  1.模板后缀
//  2.使用的模板引擎
app.engine('art', require('express-art-template'));
// 2.告诉express框架模板存放的位置是什么 第一个views是固定的 express配置项名字  第二个views为文件夹名字
app.set('views', path.join(__dirname, 'views'));
// 3.告诉express框架模板的默认后缀是什么
app.set('view engine', 'art');

app.get('/index', (req, res) => {
  // 1. 拼接模板路径
  // 2. 拼接模板后缀
  // 3. 哪一个模板和哪一个数据进行拼接
  // 4. 将拼接结果响应给了客户端
  res.render('index', {
    msg: 'message',
  });
});

app.get('/list', (req, res) => {
  res.render('list', {
    msg: 'list page',
    users: [
      {
        name: '沫沫',
        age: 18,
      },
      {
        name: '末日',
        age: 26,
      },
    ],
  });
});

app.listen(8888);
