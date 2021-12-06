/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-05 20:10:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-06 10:36:05
 */
import React, { PureComponent } from 'react';

import CSSTransitionDemo from './transition/CSSTransitionDemo';
import SwitchTransitionDemo from './transition/SwitchTransitionDemo';

export default class App extends PureComponent {
  render() {
    return (
      <div style={{ textAlign: 'center', padding: '30px' }}>
        <SwitchTransitionDemo />
        <br />
        <CSSTransitionDemo />
      </div>
    );
  }
}
