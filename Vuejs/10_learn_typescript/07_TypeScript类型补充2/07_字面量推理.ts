/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 19:17:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 19:25:43
 */
// const info = {
//   name: "ioinn",
//   age: 18
// }

// info.name = "momo"

type Method = 'GET' | 'POST';
function request(url: string, method: Method) {}

type Request = {
  url: string;
  method: Method;
};

const options: Request = {
  url: 'http://www.ioinn.cn/abc',
  method: 'POST',
};

// const options = {
//   url: 'http://www.ioinn.cn/abc',
//   method: 'POST',
// } as const;

// request(options.url, options.method as Method);
request(options.url, options.method);

export {};
