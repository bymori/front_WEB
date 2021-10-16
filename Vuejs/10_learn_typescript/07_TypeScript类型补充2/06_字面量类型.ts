/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 19:01:38
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 19:16:46
 */

// "Hello World"也是可以作为类型的, 叫做字面量类型
const message: 'Hello World' = 'Hello World';

// let num: 123 = 123
// num = 321

// 字面量类型的意义, 就是必须结合联合类型
type Alignment = 'left' | 'right' | 'center';

let align: Alignment = 'left';
align = 'right';
align = 'center';

// align = 'hehehehe'
