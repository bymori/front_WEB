/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-01 16:29:03
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-01 21:41:03
 */
import React, { PureComponent, createContext } from 'react';

// 定义一个高阶组件
function withUser(WrappedComponent) {
  return (props) => {
    return (
      <UserContext.Consumer>
        {(user) => {
          return <WrappedComponent {...props} {...user} />;
        }}
      </UserContext.Consumer>
    );
  };
}

// 创建Context
const UserContext = createContext({
  nickname: '默认',
  level: -1,
  region: '中国',
});

class Home extends PureComponent {
  render() {
    return (
      <h2>
        Home:{' '}
        {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}
      </h2>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <h2>
        About:{' '}
        {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}
      </h2>
    );
  }
}

class Detail extends PureComponent {
  render() {
    return (
      <ul>
        <li>{this.props.nickname}</li>
        <li>{this.props.level}</li>
        <li>{this.props.region}</li>
      </ul>
    );
  }
}

const UserHome = withUser(Home);
const UserAbout = withUser(About);
const UserDetail = withUser(Detail);

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider
          value={{ nickname: 'momo', level: 90, region: '中国' }}>
          <UserHome />
          <UserAbout />
          <UserDetail />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
