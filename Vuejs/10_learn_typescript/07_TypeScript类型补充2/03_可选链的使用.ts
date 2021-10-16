/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 18:40:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 18:50:31
 */
type Person = {
  name: string;
  friend?: {
    name: string;
    age?: number;
    girlFriend?: {
      name: string;
    };
  };
};

const info: Person = {
  name: 'ioinn',
  friend: {
    name: 'momo',
    girlFriend: {
      name: '末日',
    },
  },
};

// 另外一个文件中
console.log(info.name);
// console.log(info.friend!.name)
console.log(info.friend?.name);
console.log(info.friend?.age);
console.log(info.friend?.girlFriend?.name);

// if (info.friend) {
//   console.log(info.friend.name)

//   if (info.friend.age) {
//     console.log(info.friend.age)
//   }
// }
