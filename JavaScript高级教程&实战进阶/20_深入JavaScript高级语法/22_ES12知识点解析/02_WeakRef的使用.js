/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 17:25:52
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 17:30:41
 */
// ES12: WeakRef类
// WeakRef.prototype.deref:
// > 如果原对象没有销毁, 那么可以获取到原对象
// > 如果原对象已经销毁, 那么获取到的是undefined
const finalRegistry = new FinalizationRegistry((value) => {
  console.log('注册在finalRegistry的对象, 某一个被销毁', value);
});

let obj = { name: 'ioinn' };
let info = new WeakRef(obj);

finalRegistry.register(obj, 'obj');

obj = null;

setTimeout(() => {
  console.log(info.deref()?.name);
  console.log(info.deref() && info.deref().name);
}, 2000);
