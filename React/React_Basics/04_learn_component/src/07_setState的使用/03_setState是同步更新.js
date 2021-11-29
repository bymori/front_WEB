/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-29 16:20:07
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-29 18:30:08
 */
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello World',
    };
  }

  render() {
    return (
      <div>
        <h2>当前文本: {this.state.message}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <button id="btn">改变文本2</button>
      </div>
    );
  }

  componentDidMount() {
    document.getElementById('btn').addEventListener('click', (e) => {
      this.setState({
        message: '哈喽 沫沫 2',
      });
      console.log(this.state.message); // 哈喽 沫沫 2
    });

    // this.setState({
    //   message: '哈喽 沫沫 2',
    // });
    // console.log(this.state.message); // Hello World
  }

  changeText() {
    // 情况一: 将setState放入到定时器中
    setTimeout(() => {
      this.setState({
        message: '哈喽 沫沫',
      });
      console.log(this.state.message);
    }, 0);
  }
}
