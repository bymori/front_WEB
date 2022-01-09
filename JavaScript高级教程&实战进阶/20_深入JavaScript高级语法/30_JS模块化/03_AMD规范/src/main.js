/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-09 14:21:56
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-09 14:35:04
 */
console.log('main');

require.config({
  paths: {
    foo: './foo',
    bar: './bar',
  },
});

require(['foo', 'bar'], function (foo) {
  console.log('main', foo);
});
