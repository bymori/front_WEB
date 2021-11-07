/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 21:51:23
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 22:04:41
 */
// function foo() {
//   console.log('foo函数被调用了', this);
// }

/**
 * foo 直接调用和 call / apply 调用的不同点 在于this的绑定的不同
 * foo 直接调用 指向的是全局对象(window)
 */
// foo();

// var obj = {
//   name: 'obj',
// };

// call / apply 是可以指定 this 的绑定对象
// foo.call(obj);
// foo.apply(obj);
// foo.apply('abc');

// 2. call 和 apply有什么区别
function sum(num1, num2, num3 = 0) {
  console.log(num1 + num2 + num3, this);
}

sum.call('call', 20, 30, 40);
sum.apply('apply', [50, 60]);

// call 和 apply 在执行函数时，是可以明确的绑定this，这个绑定规则称之为显式绑定
