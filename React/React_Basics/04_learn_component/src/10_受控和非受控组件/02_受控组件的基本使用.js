/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-30 20:34:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-30 21:09:52
 */
import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户: {/* 受控组件 */}
            <input
              type="text"
              id="username"
              onChange={(e) => this.handleChange(e)}
              value={this.state.username}
            />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(event);
    console.log(this.state.username);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  }
}
