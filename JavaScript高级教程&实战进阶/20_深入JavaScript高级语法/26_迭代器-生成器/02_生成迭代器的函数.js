/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-14 10:08:48
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-14 10:16:52
 */
function createArrayIterator(arr) {
  let index = 0;
  return {
    next: function () {
      if (index < arr.length) {
        return { done: false, value: arr[index++] };
      } else {
        return { done: true, value: undefined };
      }
    },
  };
}

const names = ['abc', 'cba', 'nba'];
const nums = [10, 22, 33, 12];

const namesIterator = createArrayIterator(names);
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());

const numsIterator = createArrayIterator(nums);
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());

// 创建一个无限的迭代器
function createNumberIterator() {
  let index = 0;
  return {
    next: function () {
      return { done: false, value: index++ };
    },
  };
}

const numberIterator = createNumberIterator();
console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());
