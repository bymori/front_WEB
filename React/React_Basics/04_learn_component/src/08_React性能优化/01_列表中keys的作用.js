/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-29 20:09:12
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-29 20:39:50
 */
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: ['肖申克的救赎', '战狼2'],
    };
  }
  render() {
    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {this.state.movies.map((item, index) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <button onClick={(e) => this.insertMovie()}>添加电影</button>
      </div>
    );
  }

  insertMovie() {
    // this.setState({
    //   movies: [...this.state.movies, '长津湖'],
    // });
    this.setState({
      movies: ['长津湖', ...this.state.movies],
    });
  }
}
