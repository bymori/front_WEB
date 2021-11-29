/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-28 22:36:13
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-28 22:52:39
 */
import React, { Component } from 'react';

class ChildCpn extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  componentDidMount() {
    console.log('componentDidMount: ', this.props);
  }

  render() {
    console.log(this.props, 'render');
    const { name, age, height } = this.props;
    return <h2>子组件展示数据: {name + ' ' + age + ' ' + height}</h2>;
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="momo" age="19" height="1.78" />
        <ChildCpn name="mori" age="26" height="1.69" />
      </div>
    );
  }
}
