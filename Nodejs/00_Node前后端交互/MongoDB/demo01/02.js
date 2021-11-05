/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-05 19:19:51
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-05 19:40:05
 */

const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/playground', { useNewUrlParser: true })
  .then(() => console.log('数据库连接成功'))
  .catch((err) => console.log(err, '数据库连接失败'));

// 创建集合规则
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean,
});

// 使用规则创建集合
// mongoose.model('ModelName', mySchema)
// 1.集合名称
// 2.集合规则
const Course = mongoose.model('Course', courseSchema); // courses

// 创建文档
const course = new Course({
  name: 'node.js基础',
  author: '沫沫',
  isPublished: true,
});
// 将文档插入到数据库中
course.save();
