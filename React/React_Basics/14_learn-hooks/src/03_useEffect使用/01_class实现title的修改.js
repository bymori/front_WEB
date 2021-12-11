/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-11 21:07:13
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-11 22:17:15
 */
import React, { PureComponent } from 'react';

export default class ClassCounterTitleChange extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    // 1.修改DOM
    document.title = 'class ' + this.state.counter;

    // 2.订阅事件
    console.log('订阅一些事件');

    // 3.网络请求
    // 4. ...
  }

  componentWillUnmount() {
    console.log('取消事件订阅');
  }

  componentDidUpdate() {
    document.title = 'class ' + this.state.counter;
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button
          onClick={(e) => this.setState({ counter: this.state.counter + 1 })}>
          +1
        </button>
      </div>
    );
  }
}
