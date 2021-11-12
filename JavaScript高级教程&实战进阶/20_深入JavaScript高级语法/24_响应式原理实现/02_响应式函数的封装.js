/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 21:06:39
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 21:06:40
 */
// 封装一个响应式的函数
let reactiveFns = [];
function watchFn(fn) {
  reactiveFns.push(fn);
}

// 对象的响应式
const obj = {
  name: 'ioinn',
  age: 18,
};

watchFn(function () {
  const newName = obj.name;
  console.log('哈喽 沫沫');
  console.log('Hello World');
  console.log(obj.name); // 100行
});

watchFn(function () {
  console.log(obj.name, 'demo function -------');
});

function bar() {
  console.log('普通的其他函数');
  console.log('这个函数不需要有任何响应式');
}

obj.name = 'mori';
reactiveFns.forEach((fn) => {
  fn();
});
