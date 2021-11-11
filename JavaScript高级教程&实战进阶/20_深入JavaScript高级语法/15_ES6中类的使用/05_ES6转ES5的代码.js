/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 00:40:37
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 14:50:28
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(this.name + ' eating~');
  }
}

// babel转换  https://babeljs.io/
('use strict');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/*#__PURE__*/ // 纯函数
/**
 * webpack 压缩 tree-shaking
 * 这个函数没副作用
 */

var Person = /*#__PURE__*/ (function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [
    {
      key: 'eating',
      value: function eating() {
        console.log(this.name + ' eating~');
      },
    },
  ]);

  return Person;
})();
