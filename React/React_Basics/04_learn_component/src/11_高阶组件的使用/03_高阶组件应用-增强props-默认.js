/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-01 16:29:03
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-01 21:30:50
 */
import React, { PureComponent, createContext } from 'react';

// 创建Context
const UserContext = createContext({
  nickname: '默认',
  level: -1,
  region: '中国',
});

class Home extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {(user) => {
          return (
            <h2>
              Home:{' '}
              {`昵称: ${user.nickname} 等级: ${user.level} 区域: ${user.region}`}
            </h2>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {(user) => {
          return (
            <h2>
              About:{' '}
              {`昵称: ${user.nickname} 等级: ${user.level} 区域: ${user.region}`}
            </h2>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider
          value={{ nickname: 'momo', level: 90, region: '中国' }}>
          <Home />
          <About />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
