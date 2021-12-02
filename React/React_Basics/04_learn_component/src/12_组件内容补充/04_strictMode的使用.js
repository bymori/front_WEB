/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-02 21:18:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-02 21:35:05
 */
import React, { PureComponent, StrictMode } from 'react';

class Home extends PureComponent {
  constructor(props) {
    super(props);

    console.log('Home constructor');
  }

  //   UNSAFE_componentWillMount() {
  //     console.log('home componentWillMount');
  //   }

  render() {
    return <div ref="title">Home</div>;
  }
}

class Profile extends PureComponent {
  constructor(props) {
    super(props);

    console.log('profile constructor');
  }

  UNSAFE_componentWillMount() {
    console.log('profile componentWillMount');
  }

  render() {
    return <div ref="title">Profile</div>;
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </div>
    );
  }
}
