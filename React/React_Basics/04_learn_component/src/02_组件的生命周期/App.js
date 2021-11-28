/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-28 19:59:12
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-28 22:12:27
 */
import React, { Component } from 'react';

class Cpn extends Component {
  render() {
    return <h2>我是Cpn组件</h2>;
  }

  componentWillUnmount() {
    console.log('调用了Cpn的 componentWillUnmount 方法');
  }
}

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      isShow: true,
    };

    console.log('执行了组件的 constructor 方法');
  }
  render() {
    console.log('执行了组件的 render 方法');

    return (
      <div>
        <div>这里是App组件</div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <hr />
        <button onClick={(e) => this.changeCpnShow()}>切换</button>
        {this.state.isShow && <Cpn />}
      </div>
    );
  }

  componentDidMount() {
    // 组件挂载完成
    console.log('执行了组件的 componentDidMount 方法');
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('执行了组件的 componentDidUpdate 方法');
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);
    console.log('snapshot: ', snapshot);
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  changeCpnShow() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
}
