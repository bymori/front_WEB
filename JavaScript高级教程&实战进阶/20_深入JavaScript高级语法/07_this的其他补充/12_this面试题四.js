/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-08 16:58:16
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-08 17:12:07
 */
var name = 'window';
function Person(name) {
  this.name = name;
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name);
      };
    },
    foo2: function () {
      // this = obj
      return () => {
        console.log(this.name);
      };
    },
  };
}
var person1 = new Person('person1');
var person2 = new Person('person2');

person1.obj.foo1()(); // window obj.foo1()返回一个函数 这个函数在全局作用于下直接执行（默认绑定）
person1.obj.foo1.call(person2)(); // window 最终还是拿到一个返回的函数（虽然多了一步call的绑定 这个函数在全局作用于下直接执行（默认绑定）
person1.obj.foo1().call(person2); // person2 通过call绑定this指向person2

person1.obj.foo2()(); // obj 拿到foo2()的返回值，是一个箭头函数 箭头函数在执行时找上层作用域下的this，就是obj
person1.obj.foo2.call(person2)(); // person2 foo2()的返回值，依然是箭头函数，但是在执行foo2时绑定了person2 箭头函数在执行时找上层作用域下的this，找到的是person2
person1.obj.foo2().call(person2); // obj  foo2()的返回值，依然是箭头函数 箭头函数通过call调用是不会绑定this，所以找上层作用域下的this是obj
