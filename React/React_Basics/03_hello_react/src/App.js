/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-28 13:06:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-28 13:16:09
 */

// import React from 'react';
// const { Component } = React;
import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}
