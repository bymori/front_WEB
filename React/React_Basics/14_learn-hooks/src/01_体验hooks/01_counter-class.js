/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-11 19:23:39
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-11 19:25:07
 */
import React, { PureComponent } from 'react';

export default class CounterClass extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    console.log('class counter渲染');
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <button onClick={(e) => this.decrement()}>-1</button>
      </div>
    );
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }
}
