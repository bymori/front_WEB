/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 22:44:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 23:25:22
 */
// 通过类型(type)别名来声明对象类型
// type InfoType = {name: string, age: number}

// 另外一种方式声明对象类型: 接口 interface
// 在其中可以定义可选类型
// 也可以定义只读属性
interface IInfoType {
  readonly name: string;
  age: number;
  friend?: {
    name: string;
  };
}

const info: IInfoType = {
  name: 'ioinn',
  age: 18,
  friend: {
    name: '沫沫',
  },
};

console.log(info.friend?.name);
console.log(info.name);
// info.name = "123"
info.age = 20;
