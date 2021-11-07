/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 17:16:58
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 17:45:44
 */

var nums = [10, 7, 13, 122, 67];

// var newNums = [];
// for (var i = 0; i < nums.length; i++) {
//   var num = nums[i];
//   if (num % 2 === 0) {
//     newNums.push(num);
//   }
// }
// console.log(newNums);

// 函数和方法的区别
// 函数 function: 独立的 function 那么称之为是一个函数
function foo() {}

// 方法 method: 当我们的一个函数属于某一个对象时，我们称这个函数是这个对象的方法
var obj = {
  foo: function () {},
};
obj.foo();

// filter: 过滤
// [10, 7, 13, 122, 67]
// [ 10, 122 ]
var newNums = nums.filter(function (item) {
  return item % 2 === 0; // 偶数
});
console.log(newNums);

// map: 映射
// [10, 7, 13, 122, 67]
// [ 100, 70, 130, 1220, 670 ]
var newNums2 = nums.map(function (item) {
  return item * 10; // *10
});
console.log(newNums2);

// forEach: 迭代 没有返回值
nums.forEach(function (item) {
  console.log(item);
});

// find / findIndex
var item = nums.find(function (item) {
  return item === 13;
});
console.log(item, 'find');

var friends = [
  { name: 'ioinn', age: 18 },
  { name: 'momo', age: 26 },
  { name: 'mori', age: 48 },
  { name: 'jie', age: 29 },
  { name: 'ke', age: 35 },
];

var findFriend = friends.find(function (item) {
  return item.name === 'momo';
});
console.log(findFriend);

var friendIndex = friends.findIndex(function (item) {
  return item.name === 'momo';
});
console.log(friendIndex); // 索引值： 1

// reduce: 累加

// for 循环方式
var total = 0;
for (var i = 0; i < nums.length; i++) {
  total += nums[i];
}
console.log(total, 'total');

// reduce 方式
var totalReduce = nums.reduce(function (prevValue, item) {
  return prevValue + item;
}, 0);
console.log(totalReduce, 'nums.reduce');
