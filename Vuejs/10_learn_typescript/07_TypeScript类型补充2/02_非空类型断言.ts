/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 18:30:09
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 18:38:07
 */
// message? -> undefined | string
function printMessageLength(message?: string) {
  //   if (message) {
  //     console.log(message.length);
  //   }
  console.log(message!.length);
}

printMessageLength('aaaa');
printMessageLength('hello world');
// printMessageLength();
