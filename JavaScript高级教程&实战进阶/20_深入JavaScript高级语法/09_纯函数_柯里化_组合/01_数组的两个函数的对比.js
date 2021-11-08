/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-08 23:09:13
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-08 23:18:29
 */
var names = ['abc', 'cba', 'nba', 'dna'];

/**
 *  slice 只要给他传入一个 start/end , 那么对于同一个数组来说, 它会给我们返回确定的值
 *  slice 函数本身不会修改原来的数组
 *  slice --> this
 *  slice 函数本身就是一个纯函数
 */
// var newNames1 = names.slice(0, 3);
// console.log(newNames1);
// console.log(names);

/**
 *  splice 在执行时, 有修改调用的数组对象本身, 修改的这个操作 就是产生的副作用
 *  splice 不是一个纯函数
 */
var newNames2 = names.splice(2);
console.log(newNames2);
console.log(names);
