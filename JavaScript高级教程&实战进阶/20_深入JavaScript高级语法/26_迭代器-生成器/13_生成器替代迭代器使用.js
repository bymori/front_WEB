/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-14 13:47:03
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-14 14:07:19
 */

// 迭代器;
// function createArrayIterator(arr) {
//   let index = 0;
//   return {
//     next: function () {
//       if (index < arr.length) {
//         return { done: false, value: arr[index++] };
//       } else {
//         return { done: true, value: undefined };
//       }
//     },
//   };
// }

// const names = ['abc', 'cba', 'nba'];
// const namesIterator = createArrayIterator(names);

// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());

// 1.生成器来替代迭代器
function* createArrayIterator(arr) {
  // 1.第一种写法
  //   yield 'abc'; // { value: 'abc', done: false }
  //   yield 'cba'; // { value: 'cba', done: false }
  //   yield 'nba'; // { value: 'nba', done: false }
  //
  // 2.第二种写法
  //   for (const item of arr) {
  //     yield item;
  //   }
  //
  // 3.第三种写法 yield*
  yield* arr;
}
// const names = ['abc', 'cba', 'nba'];
// const namesIterator = createArrayIterator(names);

// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());

// 2.创建一个函数, 这个函数可以迭代一个范围内的数字
// 10 20

// function createRangeIterator(start, end) {
//   let index = start;
//   return {
//     next: function () {
//       if (index < end) {
//         return { done: false, value: index++ };
//       } else {
//         return { done: true, value: undefined };
//       }
//     },
//   };
// }

function* createRangeIterator(start, end) {
  let index = start;
  while (index < end) {
    yield index++;
  }
}

const rangeIterator = createRangeIterator(10, 20);
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());

// 3.class案例
class Classroom {
  constructor(address, name, students) {
    this.address = address;
    this.name = name;
    this.students = students;
  }

  entry(newStudent) {
    this.students.push(newStudent);
  }

  foo = () => {
    console.log('输出log foo function');
  };

  //   [Symbol.iterator] = function* () {
  //     yield* this.students;
  //   };

  *[Symbol.iterator]() {
    yield* this.students;
  }
}

const classroom = new Classroom('101', '1102', [
  'Erica',
  'Manuela',
  'Becker',
  'momo',
]);

classroom.foo(); // 输出log foo function

for (const item of classroom) {
  console.log(item);
}
