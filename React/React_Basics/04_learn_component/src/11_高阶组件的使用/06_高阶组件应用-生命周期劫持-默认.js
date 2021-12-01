/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-01 21:59:59
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-01 22:07:45
 */
import React, { PureComponent } from 'react';

class Home extends PureComponent {
  // 即将渲染获取一个时间 beginTime
  UNSAFE_componentWillMount() {
    this.beginTime = Date.now();
  }

  // 渲染完成再获取一个时间 endTime
  componentDidMount() {
    this.endTime = Date.now();
    const interval = this.endTime - this.beginTime;
    console.log(`Home渲染时间: ${interval}`);
  }

  render() {
    return <h2>Home</h2>;
  }
}

class About extends PureComponent {
  // 即将渲染获取一个时间 beginTime
  UNSAFE_componentWillMount() {
    this.beginTime = Date.now();
  }

  // 渲染完成再获取一个时间 endTime
  componentDidMount() {
    this.endTime = Date.now();
    const interval = this.endTime - this.beginTime;
    console.log(`About渲染时间: ${interval}`);
  }

  render() {
    return <h2>About</h2>;
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    );
  }
}
