/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-20 16:33:44
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-20 16:39:55
 */
function myModule() {
    //私有数据
  var msg = 'My ioinn';
  //操作数据的函数
  function doSomething() {
    console.log('doSomething() ' + msg.toUpperCase());
  }
  function doOtherthing() {
    console.log('doOtherthing() ' + msg.toLowerCase());
  }

  //向外暴露对象 (给外部使用的方法)
  return {
    // 属性值 : 属性名 ;
    doSomething: doSomething,
    doOtherthing: doOtherthing,
  };
}
