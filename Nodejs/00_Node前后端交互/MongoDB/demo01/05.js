/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-05 21:02:11
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-05 21:04:48
 */
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/playground', { useNewUrlParser: true })
  .then(() => console.log('数据库连接成功'))
  .catch((err) => console.log(err, '数据库连接失败'));

// 创建集合规则
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
  hobbies: [String],
});

// 使用规则创建集合
const User = mongoose.model('User', userSchema);

// 查找到一条文档并且删除
// 返回删除的文档
// 如何查询条件匹配了多个文档 那么将会删除第一个匹配的文档
// User.findOneAndDelete({ _id: '5c09f267aeb04b22f8460968' }).then((result) =>
//   console.log(result)
// );

// 删除多条文档
User.deleteMany({}).then((result) => console.log(result));
