/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 15:48:48
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 15:53:08
 */
var obj = { name: 'ioinn' };

var info = { name: 'momo', friend: obj };

var p = { name: 'mori', friend: obj };

// 引用计数存在一个很大的弊端：循环引用
var obj1 = { friend: obj2 };
var obj2 = { friend: obj1 };

// 解决
obj1.friend = null;
