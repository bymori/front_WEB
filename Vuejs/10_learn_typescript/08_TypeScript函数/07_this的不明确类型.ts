/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 20:28:26
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 20:28:26
 */
type ThisType = { name: string };

function eating(this: ThisType, message: string) {
  console.log(this.name + ' eating', message);
}

const info = {
  name: 'ioinn',
  eating: eating,
};

// 隐式绑定
info.eating('嘿嘿');

// 显示绑定
eating.call({ name: 'mori' }, '呵呵呵');
eating.apply({ name: 'james' }, ['啦啦啦']);

export {};
