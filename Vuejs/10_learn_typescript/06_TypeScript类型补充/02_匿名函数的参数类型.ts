/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 17:41:40
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 17:41:40
 */
// 通常情况下, 在定义一个函数时, 都会给参数加上类型注解的
function foo(message: string) {}

const names = ['abc', 'cba', 'nba'];
// item根据上下文的环境推导出来的, 这个时候可以不添加的类型注解
// 上下文中的函数: 可以不添加类型注解
names.forEach(function (item) {
  console.log(item.split(''));
});
