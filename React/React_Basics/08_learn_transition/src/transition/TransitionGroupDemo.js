/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 10:51:55
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-06 11:02:30
 */
import React, { PureComponent } from 'react';

import './TransitionGroup.css';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      names: ['Sincere', 'Amie', 'momo'],
    };
  }

  render() {
    return (
      <TransitionGroup>
        <button onClick={(e) => this.addName()}>+name</button>

        {this.state.names.map((item, index) => {
          return (
            <CSSTransition key={item + index} timeout={500} classNames="item">
              <div>{item}</div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  }

  addName() {
    this.setState({
      names: [...this.state.names, 'mori'],
    });
  }
}
