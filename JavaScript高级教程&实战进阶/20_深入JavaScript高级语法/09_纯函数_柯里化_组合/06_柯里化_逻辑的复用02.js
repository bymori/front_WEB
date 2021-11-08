/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 00:45:57
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 00:58:30
 */
// function log(date, type, message) {
//   console.log(
//     `[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`
//   );
// }

// log(new Date(), 'DEBUG', '一个小bug');
// log(new Date(), 'DEBUG', '两个小bug');
// log(new Date(), 'DEBUG', '还有一个小bug');

// 通过柯里化进行优化
var log = (date) => (type) => (message) => {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`
  );
};

var nowLog = log(new Date());
nowLog('DEBUG')('一个小bug');
nowLog('DEBUG')('两个小bug');

var nowDebugLog = log(new Date())('DEBUG');
nowDebugLog('4个小bug');

var nowTypesLog = log(new Date())('Types');
nowTypesLog('其他类型bug');
