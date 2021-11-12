/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 14:02:22
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 14:22:17
 */
// 1. flat的使用
// flat([depth]) 指定要提取嵌套数组的结构深度，默认值为 1。
// 按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
// const nums = [
//   10,
//   20,
//   [2, 9],
//   [
//     [30, 40],
//     [10, 45],
//   ],
//   78,
//   [55, 88],
// ];
// const newNums = nums.flat();
// console.log(newNums);

// const newNums2 = nums.flat(2);
// console.log(newNums2);

// 2. flatMap的使用
//  var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
//      // return element for new_array
//  }[, thisArg])
// 首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
// const nums2 = [10, 20, 30];
// const newNums3 = nums2.flatMap((item) => {
//   return item * 2;
// });
// const newNums4 = nums2.map((item) => {
//   return item * 3;
// });

// console.log(newNums3);
// console.log(newNums4);

// 3. flatMap的应用场景
const messages = ['Hello World', 'hello ioinn', 'my name is momo'];
const words = messages.flatMap((item) => {
  return item.split(' ');
});

console.log(words);
