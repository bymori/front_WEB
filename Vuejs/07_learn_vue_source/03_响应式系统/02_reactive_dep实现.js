/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-14 18:22:33
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 18:39:10
 */

class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  addEffect(effect) {
    this.subscribers.add(effect);
  }

  notify() {
    this.subscribers.forEach((effect) => {
      effect();
    });
  }
}

const info = { counter: 100 };

const dep = new Dep();

function doubleCounter() {
  console.log(info.counter * 2);
}
function powerCounter() {
  console.log(info.counter * info.counter);
}

dep.addEffect(doubleCounter);
dep.addEffect(powerCounter);

info.counter++;

dep.notify();
