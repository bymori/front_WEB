/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 23:10:11
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 23:40:30
 */
// 10, 20, 40, 333
// 1.创建Set结构
const set = new Set();
set.add(10);
set.add(20);
set.add(40);
set.add(333);
set.add(10);
console.log(set); // Set(4) { 10, 20, 40, 333 }

// 2.添加对象时特别注意:
set.add({}); // {}
set.add({}); // {}

const obj = {}; // {}
set.add(obj);
set.add(obj);

console.log(set);

// 3.对数组去重(去除重复的元素)
const arr = [33, 10, 26, 30, 33, 26];
// const newArr = [];
// for (const item of arr) {
//   if (newArr.indexOf(item) !== -1) {
//     newArr.push(item);
//   }
// }

const arrSet = new Set(arr);
// const newArr = Array.from(arrSet);
const newArr = [...arrSet];
console.log(newArr); // [ 33, 10, 26, 30 ]

// 4.size属性
console.log(arrSet.size); // 4

// 5.Set的方法
// add
arrSet.add(100);
console.log(arrSet);

// delete
arrSet.delete(33);
console.log(arrSet);

// has
console.log(arrSet.has(100));

// clear
// arrSet.clear();
// console.log(arrSet);

// 6.对Set进行遍历
arrSet.forEach((item) => {
  console.log(item);
});

for (const item of arrSet) {
  console.log(item);
}
