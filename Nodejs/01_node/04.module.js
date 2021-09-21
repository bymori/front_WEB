/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-21 18:11:13
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-21 18:33:16
 */

var a = 10;
// a = 10; //全局变量
/* 
    在node中有一个全局对象global,它的作用和网页中window类似
      在全局中创建的变量都会作为global的属性保存
      在全局中创建的函数都会作，为global的方法保存

    当node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码
      function (exports, require, module, __filename, __dirname) {

    在代码的最底部，添加如下代码
      }

    实际上模块中的代码都是包装在一一个函数中执行的，并且在函数执行时，同时传递进了5个实参
    exports
      该对象用来将变量或函数暴露到外部

    require
      函数，用来引入外部的模块

    module
      module 代表的是当前模块本身
      exports 就是 module 的属性
      既可以使用 exports 导出，也可以使用 module.exports 导出
    
    __filename
      d:\Test_project\Demo_project\front_WEB\Nodejs\01_node\04.module.js
      当前模块的完整路径
    
    __dirname
      d:\Test_project\Demo_project\front_WEB\Nodejs\01_node
      当前模块所在文件夹的完整路径
*/
// console.log(global.a);

/* 
    arguments.callee
      这个属性保存的是当前执行的函数对象
*/
// console.log(arguments.callee + '');
// console.log(arguments.length);
// console.log(module);
// console.log(module.exports);
console.log(module.exports === exports);
