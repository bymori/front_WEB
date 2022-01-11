/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-11 19:02:26
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-11 19:30:14
 */
// 打开数据(和数据库建立连接)
const dbRequest = indexedDB.open('momo');
dbRequest.onerror = function (err) {
  console.log('打开数据库失败~');
};
let db = null;
dbRequest.onsuccess = function (event) {
  db = event.target.result;
};
// 第一次打开/或者版本发生升级
dbRequest.onupgradeneeded = function (event) {
  const db = event.target.result;

  console.log(db);

  // 创建一些存储对象
  db.createObjectStore('users', { keyPath: 'id' });
};

class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

const users = [
  new User(100, 'Linda', 19),
  new User(101, 'Aliyah', 56),
  new User(102, 'Mathew', 22),
];

// 获取btns, 监听点击
const btns = document.querySelectorAll('button');
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    const transaction = db.transaction('users', 'readwrite');
    console.log(transaction);
    const store = transaction.objectStore('users');

    switch (i) {
      case 0:
        console.log('点击了 新增');
        for (const user of users) {
          const request = store.add(user);
          request.onsuccess = function () {
            console.log(`${user.name}插入成功`);
          };
        }
        transaction.oncomplete = function () {
          console.log('添加操作全部完成');
        };
        break;
      case 1:
        console.log('点击了 查询');
        break;
      case 2:
        console.log('点击了 删除');
        break;
      case 3:
        console.log('点击了 修改');
        break;

      default:
        break;
    }
  };
}
