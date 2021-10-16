/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 18:14:06
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 18:29:10
 */
// <img id="ioinn"/>

// 1.类型断言 as
const el = document.getElementById('ioinn') as HTMLImageElement;
el.src = 'url地址';

// 2.Person是Student的父类
class Person {

}

class Student extends Person {
  studying() {

  }
}

function sayHello(p: Person) {
  (p as Student).studying()
}

const stu = new Student()
sayHello(stu)


// 3.了解: as any/unknown
const message = "Hello World"
const num: number = (message as unknown) as number
