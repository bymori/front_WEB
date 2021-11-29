/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-29 13:49:13
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-29 14:01:59
 */
import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    // console.log(this.props.children);

    return (
      <div className="nav-item nav-bar">
        <div className="nav-item nav-left">{this.props.children[0]}</div>
        <div className="nav-item nav-center">{this.props.children[1]}</div>
        <div className="nav-item nav-right">{this.props.children[2]}</div>
      </div>
    );
  }
}
