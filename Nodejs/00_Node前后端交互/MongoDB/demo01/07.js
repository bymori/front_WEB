/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-05 21:13:59
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-05 23:04:57
 */
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/playground', { useNewUrlParser: true })
  .then(() => console.log('数据库连接成功'))
  .catch((err) => console.log(err, '数据库连接失败'));

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    // 必选字段
    required: [true, '请传入文章标题'],
    // 字符串的最小长度
    minlength: [2, '文章长度不能小于2'],
    // 字符串的最大长度
    maxlength: [5, '文章长度最大不能超过5'],
    // 去除字符串两边的空格
    trim: true,
  },
  age: {
    type: Number,
    // 数字的最小范围
    min: [18, '数字的最小范围不能小于18'],
    // 数字的最大范围
    max: 100,
  },
  publishDate: {
    type: Date,
    // 默认值
    default: Date.now,
  },
  category: {
    type: String,
    // 枚举 列举出当前字段可以拥有的值
    enum: {
      values: ['html', 'css', 'javascript', 'node.js'],
      message: '分类名称要在一定的范围内才可以',
    },
  },
  author: {
    type: String,
    validate: {
      validator: (v) => {
        // 返回布尔值
        // true 验证成功
        // false 验证失败
        // v 要验证的值
        return v && v.length > 4;
      },
      // 自定义错误信息
      message: '传入的值不符合验证规则',
    },
  },
});

const Post = mongoose.model('Post', postSchema);

Post.create({ title: 'aa', age: 55, category: 'html', author: 'mm' })
  .then((result) => console.log(result))
  .catch((error) => {
    // 获取错误信息对象
    const err = error.errors;
    // 循环错误信息对象
    for (var attr in err) {
      // 将错误信息打印到控制台中
      console.log(err[attr]['message']);
    }
  });
