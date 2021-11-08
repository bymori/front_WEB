/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 01:49:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 02:00:05
 */
function ioCompose(...fns) {
  var length = fns.length;
  for (var i = 0; i < length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new TypeError('需要传入函数类型参数');
    }
  }

  function compose(...args) {
    var index = 0;
    var result = length ? fns[index].apply(this, args) : args;

    while (++index < length) {
      result = fns[index].call(this, result);
    }

    return result;
  }
  return compose;
}

function double(num) {
  return num * 2;
}
function square(num) {
  return num ** 2;
}
function division(num) {
  return num / 2;
}

var newFn = ioCompose(double, square, division);
console.log(newFn(20));
