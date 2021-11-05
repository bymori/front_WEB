/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-05 23:05:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-05 23:14:06
 */
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/playground', { useNewUrlParser: true })
  .then(() => console.log('数据库连接成功'))
  .catch((err) => console.log(err, '数据库连接失败'));

// 用户集合规则
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// 文章集合规则
const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

// 用户集合
const User = mongoose.model('User', userSchema);
// 文章集合
const Post = mongoose.model('Post', postSchema);

// 创建用户
// User.create({ name: 'by_mori' }).then((result) => console.log(result));

// 创建文章
// Post.create({ title: '123', author: '6185493b1f72cf8f86bc6cab' }).then(
//   (result) => console.log(result)
// );

// 查询文章
Post.find()
  .populate('author')
  .then((result) => console.log(result));
