/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-29 14:37:18
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-29 14:54:00
 */
import React, { Component } from 'react';

// 创建Context对象
const UserContext = React.createContext({
  nickname: 'aaaa',
  level: -1,
});

function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div>
            <h2>用户昵称: {value.nickname}</h2>
            <h2>用户等级: {value.level}</h2>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: 'momo',
      level: 99,
    };
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>

        <hr />
        <Profile />
      </div>
    );
  }
}
