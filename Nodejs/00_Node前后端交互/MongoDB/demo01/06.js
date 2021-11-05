/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-05 21:07:58
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-05 21:13:16
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

// 更新集合中的文档 (更新一个)
// User.updateOne({ name: '李四' }, { age: 120, name: '李狗蛋' }).then((result) =>
//   console.log(result)
// );

// 更新集合中的文档 (更新多个)
User.updateMany({}, { age: 300 }).then((result) => console.log(result));
