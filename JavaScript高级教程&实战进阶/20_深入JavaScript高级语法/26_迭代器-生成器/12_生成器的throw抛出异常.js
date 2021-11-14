/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-14 12:04:12
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-14 12:15:37
 */
function* foo() {
  console.log('代码开始执行~');

  const value1 = 100;
  try {
    yield value1;
  } catch (error) {
    console.log('捕获到异常情况:', error);

    yield 'abc';
  }

  console.log('第二段代码继续执行');
  const value2 = 200;
  yield value2;

  console.log('代码执行结束~');
}

const generator = foo();

const result = generator.next();
if (result.value !== 200) {
  console.log(generator.throw('error message'));
}
