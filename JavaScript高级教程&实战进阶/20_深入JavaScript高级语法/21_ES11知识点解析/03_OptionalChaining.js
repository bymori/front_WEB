/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 16:47:30
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 17:05:41
 */
const info = {
  name: 'momo',
  friend: {
    // girlFriend: {
    //   name: 'mori',
    // },
  },
};

// console.log(info.friend.girlFriend.name);
if (info && info.friend && info.friend.girlFriend) {
  console.log(info.friend.girlFriend.name);
}

// ES11提供了 可选链 (Optional Chaining)
console.log(info.friend?.girlFriend?.name);

console.log('其他的代码逻辑');
