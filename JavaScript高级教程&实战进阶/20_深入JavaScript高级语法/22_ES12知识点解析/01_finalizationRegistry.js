/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 17:14:30
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 17:14:31
 */
// ES12: FinalizationRegistry类

const finalRegistry = new FinalizationRegistry((value) => {
  console.log('注册在finalRegistry的对象, 某一个被销毁', value);
});

let obj = { name: 'ioinn' };
let info = { age: 18 };

finalRegistry.register(obj, 'obj');
finalRegistry.register(info, 'value');

obj = null;
info = null;
