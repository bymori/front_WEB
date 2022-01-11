/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-11 19:01:30
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-11 19:01:30
 */
class IOCache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage;
  }

  setItem(key, value) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value));
    }
  }

  getItem(key) {
    let value = this.storage.getItem(key);
    if (value) {
      value = JSON.parse(value);
      return value;
    }
  }

  removeItem(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  key(index) {
    return this.storage.key(index);
  }

  length() {
    return this.storage.length;
  }
}

const localCache = new IOCache();
const sessionCache = new IOCache(false);

export { localCache, sessionCache };
