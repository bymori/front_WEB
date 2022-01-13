/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-13 11:19:54
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-13 11:34:54
 */

function isObject(value) {
  const valueType = typeof value;

  return value !== null && (valueType === 'object' || valueType === 'function');
}

function deepClone(originValue) {
  // 判断传入的originValue是否是一个对象类型

  if (!isObject(originValue)) {
    return originValue;
  }

  const newObject = {};
  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key]);
  }
  return newObject;
}

// 测试代码
const obj = {
  name: 'momo',
  age: 18,
  friend: {
    name: 'mori',
    address: {
      city: '台州',
    },
  },
  hobbies: ['abc', 'cba', 'nba'],
};

const newObj = deepClone(obj);
console.log(newObj === obj);

obj.friend.name = 'ioinn';
obj.friend.address.city = '重庆';
console.log(newObj);
console.log(obj);

// 问题 v2版本解决 如果存在数组 hobbies: ['abc', 'cba', 'nba'] 将会错误的转换为 hobbies: { '0': 'abc', '1': 'cba', '2': 'nba' }
