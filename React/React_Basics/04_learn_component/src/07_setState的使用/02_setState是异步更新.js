/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-29 16:20:07
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-29 18:06:14
 */
import React, { Component } from 'react';

function Home(props) {
  // Hello World
  return <h1>{props.message}</h1>;
}

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
        <Home message={this.state.message} />
      </div>
    );
  }

  componentDidUpdate() {
    // 方式二: 获取异步更新的state
    console.log('componentDidUpdate: ', this.state.message);
  }

  changeText() {
    // 2. setState 是异步更新
    // this.setState({
    //   message: '哈喽 沫沫',
    // });
    // console.log(this.state.message); // Hello World
    //
    // 方式一:  获取异步更新后的数据
    // setState(更新的state, 回调函数)
    // 类似于 Vue 中的 nextTick
    this.setState(
      {
        message: '哈喽 沫沫',
      },
      () => {
        console.log('changeText: ', this.state.message);
      }
    );
  }
}
