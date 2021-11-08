/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-08 16:24:28
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-08 16:30:47
 */
var name = 'window';
var person = {
  name: 'person',
  sayName: function () {
    console.log(this.name);
  },
};
function sayName() {
  var sss = person.sayName;
  sss(); // window 独立函数调用，没有和任何对象关联
  person.sayName(); // person 隐式调用
  person.sayName(); // person 隐式调用
  (b = person.sayName)(); // window 赋值表达式 独立函数调用
}
sayName();
