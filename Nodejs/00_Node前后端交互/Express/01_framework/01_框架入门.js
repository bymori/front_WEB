/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 14:55:01
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 14:57:07
 */
// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();

app.get('/', (req, res) => {
  // send()
  // 1. send方法内部会检测响应内容的类型
  // 2. send方法会自动设置http状态码
  // 3. send方法会帮我们自动设置响应的内容类型及编码
  res.send('Hello. Express');
});

app.get('/list', (req, res) => {
  res.send({ name: '张三', age: 20 });
});

// 监听端口
app.listen(8888);
console.log('网站服务器启动成功');
