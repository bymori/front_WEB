/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 21:10:49
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 21:26:19
 */

class Depend {
  constructor() {
    this.reactiveFns = [];
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn);
  }

  notify() {
    this.reactiveFns.forEach((fn) => {
      fn();
    });
  }
}

// 封装一个响应式的函数
const depend = new Depend();
function watchFn(fn) {
  depend.addDepend(fn);
}

// 对象的响应式
const obj = {
  name: 'ioinn', // depend对象
  age: 18, // depend对象
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

obj.name = 'mori';
depend.notify();
