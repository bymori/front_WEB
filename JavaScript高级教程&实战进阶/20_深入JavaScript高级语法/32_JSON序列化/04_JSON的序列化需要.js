/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-10 22:40:17
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-10 22:41:36
 */
const obj = {
  name: 'momo',
  age: 18,
  friends: {
    name: 'mori',
  },
  hobbies: ['篮球', '足球'],
};

// 将obj转成JSON格式的字符串
const objString = JSON.stringify(obj);

// 将对象数据存储localStorage
localStorage.setItem('obj', objString);

const jsonString = localStorage.getItem('obj');

// 将JSON格式的字符串转回对象
const info = JSON.parse(jsonString);
console.log(info);
