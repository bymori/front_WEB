/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-29 13:49:13
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-29 14:10:29
 */
import React, { Component } from 'react';

export default class NavBar2 extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props;
    // console.log(leftSlot, centerSlot, rightSlot);

    return (
      <div className="nav-item nav-bar">
        <div className="nav-item nav-left">{leftSlot}</div>
        <div className="nav-item nav-center">{centerSlot}</div>
        <div className="nav-item nav-right">{rightSlot}</div>
      </div>
    );
  }
}
