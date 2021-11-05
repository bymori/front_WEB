/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-05 19:50:37
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-05 20:37:39
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

// 向集合中插入文档
// Course.create(
//   { name: 'Javascript', author: '沫沫', isPublished: false },
//   (err, result) => {
//     console.log(err); // 错误对象
//     console.log(result); // 当前插入的文档
//   }
// );

Course.create({
  name: 'Javascript123',
  author: '沫沫',
  isPublished: false,
}).then((result) => {
  console.log(result);
});

// mongoimport –d playground –c users -–file ./user.json
