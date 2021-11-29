/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-29 10:43:12
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-29 12:05:25
 */
import React, { Component } from 'react';

import TabControl from './TabControl';

import './style.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.titles = ['流行', '新款', '精选'];

    this.state = {
      currentTitle: '新款',
      currentIndex: 1,
    };
  }

  render() {
    const { currentTitle } = this.state;

    return (
      <div>
        <TabControl
          titles={this.titles}
          //   currentIndex={this.state.currentIndex}
          itemClick={(index) => this.itemClick(index)}
        />
        {/* <h2>{this.titles[currentIndex]}</h2> */}
        <h2>{currentTitle}</h2>
      </div>
    );
  }

  itemClick(index) {
    this.setState({
      currentTitle: this.titles[index],
    });
  }
}
