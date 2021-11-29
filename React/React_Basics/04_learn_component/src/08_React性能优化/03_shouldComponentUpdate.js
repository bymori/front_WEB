/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-29 21:10:06
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-29 21:13:45
 */
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: 'Hello World',
    };
  }

  render() {
    console.log('App render函数被调用');
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <button onClick={(e) => this.changeText()}>改变文本</button>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.counter !== nextState.counter) {
      return true;
    }

    return false;
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  changeText() {
    this.setState({
      message: '哈喽 沫沫',
    });
  }
}
