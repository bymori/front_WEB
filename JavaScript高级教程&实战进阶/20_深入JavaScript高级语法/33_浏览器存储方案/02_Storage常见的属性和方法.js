/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-11 18:42:19
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-11 18:44:40
 */
// 1.setItem
localStorage.setItem('name', 'momo');
localStorage.setItem('age', 18);

// 2.length
console.log(localStorage.length);
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(localStorage.getItem(key));
}

// 3.key方法
console.log(localStorage.key(0));

// 4.getItem(key)
console.log(localStorage.getItem('age'));

// 5.removeItem
localStorage.removeItem('age');

// 6.clear方法
localStorage.clear();
