/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-10 23:50:47
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-11 00:12:21
 */
const obj = {
  name: 'momo',
  age: 18,
  friends: {
    name: 'mori',
  },
  hobbies: ['篮球', '足球'],
  foo: function () {
    console.log('foo function');
  },
};

// 将obj对象的内容放到info变量中
// 1.引用赋值
const info = obj;
obj.age = 100;
console.log('info.age: ', info.age); // 100
console.log('obj.age: ', obj.age); // 100

// 2.浅拷贝
const info2 = { ...obj };
obj.age = 1000;
console.log('info2.age: ', info2.age); // 100
console.log('obj.age: ', obj.age); // 1000

obj.friends.name = 'Molly';
console.log('info2.friends.name: ', info2.friends.name); // Molly

// 3.stringify和parse来实现  不会转换函数 如果 jsonString 中存在函数 转换时会进行移除操作
const jsonString = JSON.stringify(obj);
console.log('jsonString: ', jsonString);

const info3 = JSON.parse(jsonString);
obj.friends.name = 'Hans';

console.log('info3.friends.name: ', info3.friends.name);
console.log('info3: ', info3);
