/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 21:25:23
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 21:45:39
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

// 监听对象的属性变量: Proxy(vue3) / Object.defineProperty(vue2)
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver);
    depend.notify();
  },
});

watchFn(function () {
  const newName = objProxy.name;
  console.log('哈喽 沫沫');
  console.log('Hello World');
  console.log(objProxy.name); // 100行
});

watchFn(function () {
  console.log(objProxy.name, 'demo function -------');
});

watchFn(function () {
  console.log(objProxy.age, 'age 发生变化是需要执行的----1');
});

watchFn(function () {
  console.log(objProxy.age, 'age 发生变化是需要执行的----2');
});

objProxy.name = 'mori';

objProxy.name = 'kobe';

objProxy.age = 100;
