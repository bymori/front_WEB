/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-02 21:01:09
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-02 21:12:09
 */
import React, { PureComponent, Fragment } from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      friends: [
        { name: 'Phyllis', age: 18 },
        { name: 'Pearl', age: 20 },
        { name: 'Rosemarie', age: 25 },
      ],
    };
  }

  render() {
    return (
      // <Fragment> ** </Fragment> === <> ** </> 短语法
      // 但是!!! 短语法中不能添加任何的属性
      // <Fragment key={item.name}> √
      // < key={item.name}> ×

      //   <Fragment>
      //     <h2>当前计数: {this.state.counter}</h2>
      //     <button onClick={(e) => this.increment()}>+1</button>
      //   </Fragment>

      <>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>

        <div>
          {this.state.friends.map((item, index) => {
            return (
              <Fragment key={item.name}>
                <div>{item.name}</div>
                <p>{item.age}</p>
                <hr />
              </Fragment>
            );
          })}
        </div>
      </>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
