/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-21 18:35:19
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-21 19:59:17
 */
var hello = require('./05.helloModule');

/* 
  exports和module.exports
    通过exports只能使用。的方式来向外暴露内部变量
      exports.xxx=xxx

    而module.exports既可以通过。的形式，也可以直接赋值
      module.exports.xxx=XXXX
      module.exports ={}
*/
console.log(hello.name);
console.log(hello.age);
hello.sayName();
