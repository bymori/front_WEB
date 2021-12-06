/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 18:42:08
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-06 19:55:31
 */
import React, { PureComponent } from 'react';

import store from '../store';
import { subAction } from '../store/actionCreators';

export default class About extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter,
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <hr />
        <h1>About</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.decrement()}>-1</button>
        <button onClick={(e) => this.subNumber(5)}>-5</button>
      </div>
    );
  }

  decrement() {
    store.dispatch(subAction(1));
  }

  subNumber(num) {
    store.dispatch(subAction(num));
  }
}
