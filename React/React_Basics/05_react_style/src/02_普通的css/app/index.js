/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-02 22:29:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-02 22:39:50
 */
import React, { PureComponent } from 'react';

import './style.css';

import Home from '../home';
import Profile from '../profile';

export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        App
        <h3 className="title">我是App的title</h3>
        <hr />
        <Home />
        <hr />
        <Profile />
      </div>
    );
  }
}
