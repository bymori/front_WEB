/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-09 15:19:39
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-09 15:37:41
 */
// 1. 导入方式一 普通的导入
// import { name, age, foo } from './foo.js';
// import { FName, GAge, FFoo } from './foo.js';

// 2. 导入方式二 导入时起别名
// import { name as FName, age as GAge, foo as FFoo } from './foo.js';

// 3. 导入方式三 将导出的所有内容放到一个标识符中
import * as foo from './foo.js';

console.log(foo.name);
console.log(foo.age);

console.log(name);
console.log(age);
