/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-08 16:31:50
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-08 16:45:45
 */
var name = 'window';
var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name);
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name);
    };
  },
  foo4: function () {
    return () => {
      console.log(this.name);
    };
  },
};

var person2 = { name: 'person2' };

person1.foo1(); // 隐式绑定，肯定是person1
person1.foo1.call(person2); // person2 隐式绑定和显示绑定的结合，显示绑定优先级大于隐式绑定，所以是person2

person1.foo2(); // window 箭头函数不绑定作用域，上层作用域是全局
person1.foo2.call(person2); // window

person1.foo3()(); // window 独立函数调用
person1.foo3.call(person2)(); // window 独立函数调用
person1.foo3().call(person2); // person2 最终调用返回函数时 使用的是显式绑定  拿到foo3返回的函数，通过显示绑定到person2中，所以是person2

person1.foo4()(); // person1 箭头函数不绑定this 箭头函数的执行找上层作用域 所以是 person1
person1.foo4.call(person2)(); // person2 上层作用域被显式绑定了一个 person2
person1.foo4().call(person2); // person1 上层作用域中找到person1
