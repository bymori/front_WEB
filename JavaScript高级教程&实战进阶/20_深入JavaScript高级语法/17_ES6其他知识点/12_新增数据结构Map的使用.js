/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 00:12:27
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 00:30:44
 */
// 1. JavaScript中对象中是不能使用对象来作为key的
const obj1 = { name: 'momo' };
const obj2 = { name: 'kobe' };

// const info = {
//   [obj1]: 'aaa', // key = [object Object]
//   [obj2]: 'bbb', // key = [object Object]
// };

// console.log(info); // { '[object Object]': 'bbb' }

// 2. Map就是允许我们对象类型来作为key的
// 构造方法的使用
const map = new Map();
map.set(obj1, 'aaa');
map.set(obj2, 'bbb');
map.set(1, 'ccc');
console.log('map ', map);

const map2 = new Map([
  [obj1, 'aaa'],
  [obj2, 'bbb'],
  [2, 'ddd'],
]);
console.log('map2 ', map2);

// 3. 常见的属性和方法
console.log('map2.size ', map2.size);

// set
map2.set('momo', 'eee');
console.log('map2 set ', map2);

// get(key)
console.log('get(key) ', map2.get('momo'));

// has(key)
console.log('has(key) ', map2.has('momo'));

// delete(key)
map2.delete('momo');
console.log('delete(key) ', map2);

// clear
// map2.clear();
// console.log(' clear ', map2);

// 4. 遍历map
map2.forEach((item, key) => {
  console.log('遍历map 1 ', item, key);
});

for (const item of map2) {
  console.log('遍历map 2 ', item[0], item[1]);
}

for (const [key, value] of map2) {
  console.log('遍历map 3 ', key, value);
}
