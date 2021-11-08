/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-08 16:46:51
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-08 16:57:08
 */
var name = 'window';
function Person(name) {
  this.name = name;
  (this.foo1 = function () {
    console.log(this.name);
  }),
    (this.foo2 = () => console.log(this.name)),
    (this.foo3 = function () {
      return function () {
        console.log(this.name);
      };
    }),
    (this.foo4 = function () {
      return () => {
        console.log(this.name);
      };
    });
}
var person1 = new Person('person1');
var person2 = new Person('person2');

person1.foo1(); // 隐式绑定 peron1
person1.foo1.call(person2); // 显示绑定优先级大于隐式绑定 person2

person1.foo2(); // 箭头函数，会找上层作用域中的this，那么就是person1
person1.foo2.call(person2); // 箭头函数，使用call调用不会影响this的绑定，和上面一样向上层查找 是person1

person1.foo3()(); // window 调用位置是全局直接调用，所以依然是window（默认绑定）
person1.foo3.call(person2)(); // window 最终还是拿到了foo3返回的函数，在全局直接调用（默认绑定）
person1.foo3().call(person2); // person2 拿到foo3返回的函数后，通过call绑定到person2中进行了调用

person1.foo4()(); // person1 返回了箭头函数，和自身绑定没有关系，上层找到person1
person1.foo4.call(person2)(); // person2 调用时绑定了person2，返回的函数是箭头函数，调用时，找到了上层绑定的person2
person1.foo4().call(person2); // person1 调用返回箭头函数，和call调用没有关系，找到上层的person1
