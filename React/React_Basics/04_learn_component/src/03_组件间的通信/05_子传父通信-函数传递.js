/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-29 09:44:26
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-29 09:59:05
 */
import React, { Component } from 'react';

class CounterButton extends Component {
  render() {
    const { btnIncrement } = this.props;
    return <button onClick={btnIncrement}>+1</button>;
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+</button>
        <CounterButton btnIncrement={(e) => this.increment()} name="momo" />
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
