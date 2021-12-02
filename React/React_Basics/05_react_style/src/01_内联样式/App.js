/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-02 22:04:31
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-02 22:17:06
 */
import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      color: 'Aqua',
    };
  }

  render() {
    const pStyle = {
      color: this.state.color,
      textDecoration: 'underline',
    };

    return (
      <div>
        <h2 style={{ 'font-size': '20px', color: 'red' }}>
          我是标题 'font-size': '20px', color: 'red' Unsupported
        </h2>

        <h2 style={{ fontSize: '30px', color: 'blue' }}>
          我是标题 fontSize: '50px', color: 'blue'
        </h2>

        <p style={pStyle}>我是一段文字描述</p>
      </div>
    );
  }
}
