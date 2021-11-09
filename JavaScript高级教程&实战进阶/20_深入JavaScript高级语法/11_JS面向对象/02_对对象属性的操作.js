/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 20:58:48
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 21:13:13
 */
var obj = {
  name: 'momo',
  age: 40,
  //   height: 1.75,
  //   eating: function () {
  //     console.log(this.name + '在吃饭');
  //   },
};

/**
 * Object.defineProperty(obj, prop, descriptor)
 * 该方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象
 *  参数:
 *    obj: 要定义属性的对象。
 *    prop: 要定义或修改的属性的名称或 Symbol 。
 *    descriptor: 要定义或修改的属性描述符。
 *  返回值:
 *    被传递给函数的对象
 */

// 获取属性
console.log(obj.name);

// 修改属性
obj.name = 'ioinn';
console.log(obj.name);

// 删除属性
// delete obj.name;
// console.log(obj);

// 需求: 对属性进行操作时, 进行一些限制
// 限制: 不允许某一个属性被赋值 / 不允许某个属性被删除

// 遍历属性
for (var key in obj) {
  console.log(key);
}
