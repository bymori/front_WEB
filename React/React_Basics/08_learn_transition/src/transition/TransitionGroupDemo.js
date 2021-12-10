/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 10:51:55
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-10 11:49:09
 */
import React, { PureComponent } from 'react';

import './TransitionGroup.css';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      names: ['Sincere', 'Amie', 'momo'],
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.addName()}>+name</button>
        <TransitionGroup>
          {this.state.names.map((item, index) => {
            return (
              <CSSTransition key={item} timeout={500} classNames="item">
                <div>
                  {item}
                  <button onClick={(e) => this.removeItem(index)}>-</button>
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    );
  }

  addName() {
    this.setState({
      names: [...this.state.names, 'mori' + this.state.count++],
    });
  }

  removeItem(index) {
    // index indey indez
    this.setState({
      names: this.state.names.filter((item, indey) => index !== indey),
    });
  }
}
