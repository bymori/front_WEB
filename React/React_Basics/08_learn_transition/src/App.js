/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-05 20:10:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-05 21:03:59
 */
import React, { PureComponent } from 'react';

import CSSTransitionDemo from './transition/CSSTransitionDemo';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <CSSTransitionDemo />
      </div>
    );
  }
}
