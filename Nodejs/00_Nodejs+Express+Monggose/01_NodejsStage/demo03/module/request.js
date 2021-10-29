/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 16:48:37
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-29 17:00:38
 */

// var obj = {
//   get: function () {
//     console.log('从服务器获取数据');
//   },
//   post: function () {
//     console.log('提交数据');
//   },
// };

// // exports.xxx = obj; // { xxx: { get: [Function: get], post: [Function: post] } }

// module.exports = obj;

exports.get = function () {
  console.log('从服务器获取数据');
};

exports.post = function () {
  console.log('提交数据');
};
