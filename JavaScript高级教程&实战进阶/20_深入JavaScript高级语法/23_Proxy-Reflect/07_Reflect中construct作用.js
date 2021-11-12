/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 20:32:37
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 20:32:37
 */
function Student(name, age) {
  this.name = name;
  this.age = age;
}

function Teacher() {}

const stu = new Student('momo', 18);
console.log(stu);
console.log(stu.__proto__ === Student.prototype);

// 执行Student函数中的内容, 但是创建出来对象是Teacher对象
const teacher = Reflect.construct(Student, ['momo', 18], Teacher);
console.log(teacher);
console.log(teacher.__proto__ === Teacher.prototype);
