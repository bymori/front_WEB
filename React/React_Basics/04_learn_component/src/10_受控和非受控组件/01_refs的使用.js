/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-30 19:14:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-30 20:14:02
 */
import React, { PureComponent, createRef } from 'react';

class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>Counter组件 : 当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.counterRef = createRef();
    this.titleEl = null;
  }

  render() {
    return (
      <div>
        {/* <h2 ref=字符串/对象/函数>Hello React</h2> */}
        <h2 ref="titleRef">Hello React</h2>
        <button onClick={(e) => this.changeTextOne()}>改变文本 一</button>

        {/* 目前React推荐的方式 */}
        <h2 ref={this.titleRef}>Hello React titleRef</h2>
        <button onClick={(e) => this.changeTextTwo()}>改变文本 二</button>

        {/* 回调函数方式 */}
        <h2 ref={(arg) => (this.titleEl = arg)}>Hello React</h2>
        <button onClick={(e) => this.changeTextThree()}>改变文本 三</button>

        <Counter ref={this.counterRef} />
        <button onClick={(e) => this.appBtnClick()}>App按钮</button>
      </div>
    );
  }

  changeTextOne() {
    // 1.使用方式一: 字符串(不推荐, refs 已废弃 21.11.30)
    this.refs.titleRef.innerHTML = 'Hello momo';
  }

  changeTextTwo() {
    // 2.使用方式二: 对象方式
    this.titleRef.current.innerHTML = 'Hello JavaScript';
  }

  changeTextThree() {
    // 3.使用方式三: 回调函数方式
    this.titleEl.innerHTML = 'Hello TypeScript';
  }

  //   注意 不能在函数组件上使用ref属性，因为他们没有实例；
  appBtnClick() {
    this.counterRef.current.increment();
  }
}
