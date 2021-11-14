/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-14 14:08:31
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-14 15:17:10
 */
// request.js
function requestData(url) {
  // 异步请求的代码会被放入到executor中
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    setTimeout(() => {
      // 拿到请求的结果
      resolve(url);
    }, 300);
  });
}

// requestData('momo')
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 需求:
// 1. url: momo -> res: momo
// 2. url: res + "aaa" -> res: momoaaa
// 3. url: res + "bbb" => res: momoaaabbb

// 1.第一种方案: 多次回调
// 回调地狱
// requestData('momo').then((res) => {
//   requestData(res + 'aaa').then((res) => {
//     requestData(res + 'bbb').then((res) => {
//       console.log(res);
//     });
//   });
// });

// 2.第二种方案: Promise中then的返回值来解决
// requestData('momo')
//   .then((res) => {
//     return requestData(res + 'aaa');
//   })
//   .then((res) => {
//     return requestData(res + 'bbb');
//   })
//   .then((res) => {
//     console.log(res);
//   });

// 3.第三种方案: Promise + generator 实现
function* getData() {
  const res1 = yield requestData('momo');
  const res2 = yield requestData(res1 + 'aaa');
  const res3 = yield requestData(res2 + 'bbb');
  const res4 = yield requestData(res3 + 'ccc');
  console.log(res4);
}

// 3.1. 手动执行生成器函数
// const generator = getData();
// generator.next().value.then((res) => {
//   generator.next(res).value.then((res) => {
//     generator.next(res).value.then((res) => {
//       generator.next(res).value.then((res) => {
//         console.log(res);
//       });
//     });
//   });
// });

// 3.2. 封装一个自动执行的函数
// function execGenerator(genFn) {
//   const generator = genFn();
//   function exec(res) {
//     const result = generator.next(res);
//     if (result.done) {
//       return result.value;
//     }
//     result.value.then((res) => {
//       exec(res);
//     });
//   }
//   exec();
// }
// execGenerator(getData);

// 3.3. 第三方包co自动执行
// TJ: co/n(nvm) / commander( vue cli ) / express / koa(egg)
// const co = require('co');
// co(getData);

// 3.4. 第四种方案: async / await
async function asyncGetData() {
  const res1 = await requestData('momo');
  const res2 = await requestData(res1 + 'aaa');
  const res3 = await requestData(res2 + 'bbb');
  const res4 = await requestData(res3 + 'ccc');
  console.log(res4);
}
asyncGetData();
