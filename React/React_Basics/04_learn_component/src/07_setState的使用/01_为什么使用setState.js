/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-29 15:04:14
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-29 15:05:15
 */
import React, { Component } from 'react';

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
        <button onClick={(e) => this.increment()}>+1</button>
      </div>
    );
  }

  increment() {
    // this.state.counter += 1;
    // console.log(this.state.counter);

    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
