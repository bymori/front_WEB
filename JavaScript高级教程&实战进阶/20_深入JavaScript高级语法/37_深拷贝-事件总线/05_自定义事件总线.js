/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-13 14:19:57
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-13 14:53:28
 */
class IOEventBus {
  constructor() {
    this.eventBus = {};
  }

  on(eventName, eventCallback, thisArg) {
    let handlers = this.eventBus[eventName];

    if (!handlers) {
      handlers = [];
      this.eventBus[eventName] = handlers;
    }

    handlers.push({
      eventCallback,
      thisArg,
    });
  }

  off(eventName, eventCallback) {
    const handlers = this.eventBus[eventName];
    if (!handlers) return;

    const newHandlers = [...handlers];

    for (let i = 0; i < newHandlers.length; i++) {
      const handler = newHandlers[i];
      if (handler.eventCallback === eventCallback) {
        const index = handlers.indexOf(handler);
        handlers.splice(index, 1);
      }
    }
  }

  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName];
    if (!handlers) return;
    handlers.forEach((handler) => {
      handler.eventCallback.apply(handler.thisArg, payload);
    });
  }
}

const eventBus = new IOEventBus();

// main.js
eventBus.on(
  'abc',
  function () {
    console.log('监听abc1', this);
  },
  { name: 'momo' }
);

const handleCallback = function () {
  console.log('监听abc2', this);
};
eventBus.on('abc', handleCallback, { name: 'mori' });

// utils.js
eventBus.emit('abc', 123);

// 移除监听
eventBus.off('abc', handleCallback);
eventBus.emit('abc', 123);
