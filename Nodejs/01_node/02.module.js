/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-21 17:00:59
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-21 17:50:50
 */
/* 模块化 
    在Node中，一个js文件就是一个模块
    在Node中，每一个js文件中的js代码都是独立运行在一个函数中
    而不是全局作用域，所以一个模块的中的变量和函数在其他模块中无法访问
*/
console.log('这是一个模块，02.module.js');

// var x = 10;
// var y = 20;

/* 
    我们可以通过exports来向外部暴露变量和方法
      只需要将需要暴露给外部的变量或方法设置，为exports的属性即可
*/
// 向外部暴露属性或方法
exports.x = '我是02.module.js的x';
exports.y = '我是02的y';
exports.fn = function () {};
