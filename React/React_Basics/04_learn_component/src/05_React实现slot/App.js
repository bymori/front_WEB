/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-29 12:09:28
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-29 14:10:06
 */
import React, { Component } from 'react';

import NavBar from './NavBar';
import NavBar2 from './NavBar2';

import './style.css';

export default class App extends Component {
  render() {
    const leftJsx = <span>aaa</span>;

    return (
      <div>
        <NavBar name="" title="" className="">
          <span>aaa</span>
          <strong>bbb</strong>
          <a href="/#">ccc</a>
        </NavBar>

        <hr />

        <NavBar2
          leftSlot={leftJsx}
          centerSlot={<strong>bbb</strong>}
          rightSlot={<a href="/#">ccc</a>}
        />
      </div>
    );
  }
}
