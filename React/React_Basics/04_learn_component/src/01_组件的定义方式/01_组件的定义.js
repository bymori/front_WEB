/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-28 16:08:03
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-28 16:19:03
 */
import React, { Component } from 'react';

// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       message: '哈喽 沫沫',
//     };
//   }

//   render() {
//     return (
//       <div>
//         <span>我是App组件</span>
//         {/* shift + alt + f: 对代码进行格式化 */}
//         <h2>{this.state.message}</h2>
//       </div>
//     );
//   }
// }

/**
 * 函数式组件的特点:
 *  1.没有this对象
 *  2.没有内部的状态 (使用hooks)
 */

export default function App() {
  return (
    <div>
      <span>我是function的组件: App组件</span>
      <h2>counter</h2>
      <button>+1</button>
      <h2>哈喽 沫沫</h2>
    </div>
  );
}
