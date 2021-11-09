/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 21:47:55
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 21:58:46
 */
var obj = {
  name: 'momo',
  age: 40,
  _address: '北京市',
};

// 存取属性描述符
//   1. 隐藏某一个私有属性 不希望被外界使用和赋值
//   2. 如果我们希望截获某一个属性 它访问和设置值的过程时, 也会使用存取属性描述符
Object.defineProperty(obj, 'address', {
  // ...
  configurable: false,
  enumerable: true,
  get: function () {
    foo();
    return this._address;
  },
  set: function (value) {
    bar();
    this._address = value;
  },
});

console.log(obj);
console.log(obj.address);

obj.address = '上海市';
console.log(obj.address);

function foo() {
  console.log('获取了一次 address 的值');
}
function bar() {
  console.log('设置了 address 的值');
}
