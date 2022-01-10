/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-10 23:42:22
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-10 23:43:50
 */
const JSONString =
  '{"name":"momo","age":18,"friends":{"name":"mori"},"hobbies":["篮球","足球"]}';

const info = JSON.parse(JSONString, (key, value) => {
  if (key === 'age') {
    return value - 1;
  }
  return value;
});
console.log(info);
