/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 19:35:11
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 19:50:01
 */
var personObj = {
  running: function () {
    console.log('running');
  },
};

function createStudent(name) {
  var stu = Object.create(personObj);
  stu.name = name;
  stu.studying = function () {
    console.log('studying~');
  };
  return stu;
}

var stuObj = createStudent('stuObj');
var stuObj1 = createStudent('stuObj1');
var stuObj2 = createStudent('stuObj2');
