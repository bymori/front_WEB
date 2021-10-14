/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-14 18:22:33
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 19:38:18
 */

class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }

  notify() {
    this.subscribers.forEach((effect) => {
      effect();
    });
  }
}

let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}

// Map({key: value}): key是一个字符串
// WeakMap({key(对象): value}): key是一个对象, 弱引用
const targetMap = new WeakMap();
function getDep(target, key) {
  // 1.根据对象(target)取出对应的Map对象
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  // 2.取出具体的dep对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}

// vue3 对 raw进行数据劫持
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key);
      dep.depend();
      return target[key];
    },
    set(target, key, newValue) {
      const dep = getDep(target, key);
      target[key] = newValue;
      dep.notify();
    },
  });
}

// #测试
const proxy = reactive({ name: '123' });
proxy.name = '666';

const info = reactive({ counter: 100, name: 'ioinn' });
const foo = reactive({ height: 1.88 });

// watchEffect1
watchEffect(function () {
  console.log('effect1:', info.counter * 2, info.name);
});

// watchEffect2
watchEffect(function () {
  console.log('effect2:', info.counter * info.counter);
});

// watchEffect3
watchEffect(function () {
  console.log('effect3:', info.counter + 10, info.name);
});

watchEffect(function () {
  console.log('effect4:', foo.height);
});

// info.counter++;
// info.name = '沫沫';
// info.name = 'ioinn';

foo.height = 2;
