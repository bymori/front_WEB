/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-29 16:20:07
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-29 19:03:02
 */
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello World',
      name: 'momo',
    };
  }

  render() {
    return (
      <div>
        <h2>当前文本: {this.state.message}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
      </div>
    );
  }

  changeText() {
    this.setState({
      message: '哈喽 沫沫',
    });
    console.log(this.state.message);

    // Object.assign({}, this.state, { message: '哈喽 沫沫' });
  }
}
