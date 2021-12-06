/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-05 23:18:08
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-06 10:51:08
 */
import React, { PureComponent } from 'react';

import './SwitchTransition.css';

import { SwitchTransition, CSSTransition } from 'react-transition-group';

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOn: true,
    };
  }

  render() {
    const { isOn } = this.state;

    return (
      <div>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={isOn ? 'on' : 'off'}
            classNames="btn"
            timeout={1000}>
            <button onClick={(e) => this.setState({ isOn: !isOn })}>
              {isOn ? 'on' : 'off'}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}
