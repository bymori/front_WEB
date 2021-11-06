/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-06 12:51:08
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-06 12:51:08
 */
const mongoose = require('mongoose');

// 创建学生集合规则
const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 10,
  },
  age: {
    type: Number,
    min: 10,
    max: 25,
  },
  sex: {
    type: String,
  },
  email: String,
  hobbies: [String],
  collage: String,
  enterDate: {
    type: Date,
    default: Date.now,
  },
});

// 创建学生信息集合
const Student = mongoose.model('Student', studentsSchema);

// 将学生信息集合进行导出
module.exports = Student;
