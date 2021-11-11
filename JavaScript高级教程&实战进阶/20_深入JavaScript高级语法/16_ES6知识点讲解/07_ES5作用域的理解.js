/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 19:39:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 19:42:00
 */

// 声明对象的字面量
var obj = {
  name: 'ioinn',
};

// ES5中没有块级作用域
// 块代码(block code)
{
  // 声明一个变量
  var foo = 'foo';
}

console.log(foo);

// 在ES5中只有两个东西会形成作用域
// 1.全局作用域
// 2.函数作用域
function foo() {
  var bar = 'bar';
}

console.log(bar);

function foo() {
  function demo() {}
}
