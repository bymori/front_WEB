/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 13:44:21
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 13:50:13
 */
const message = 'Hello World';

const newMessage = message.padStart(15, '*').padEnd(20, '-');
console.log(newMessage);

// 案例
const cardNumber = '484359846531768154';
const lastFourCard = cardNumber.slice(-4);
const finalCard = lastFourCard.padStart(cardNumber.length, '*');
console.log(finalCard);
