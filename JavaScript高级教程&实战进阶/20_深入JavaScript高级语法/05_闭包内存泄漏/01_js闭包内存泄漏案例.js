/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 19:40:27
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 20:20:15
 */
function createFnArray() {
  //   var arr = [1, 1, 1, 1, 1, 1, 1, 1];
  var arr = new Array(1024 * 1024).fill(1); // 占据的空间是4M 1024*1024*4 1024=1kb

  return function () {
    console.log(arr.length);
  };
}

// var arrayFn = createFnArray();
// arrayFn = null;

var arrayFns = [];
for (var i = 0; i < 100; i++) {
  setTimeout(() => {
    arrayFns.push(createFnArray());
  }, i * 20);
}

setTimeout(() => {
  //   arrayFns = null;
  for (var i = 0; i < 100; i++) {
    setTimeout(() => {
      arrayFns.pop();
    }, i * 20);
  }
}, 10000);
