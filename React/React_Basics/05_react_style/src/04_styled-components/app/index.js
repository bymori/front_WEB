/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-02 22:29:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-03 15:41:31
 */
import React, { PureComponent } from 'react';

import styled, { ThemeProvider } from 'styled-components';

import Home from '../home';
import Profile from '../profile';

const IOButton = styled.button`
  padding: 10px 20px;
  border-color: red;
  color: red;
`;

// const IOPrimaryButton = styled.button`
//   padding: 10px 20px;
//   border-color: red;

//   color: #fff;
//   background-color: green;
// `;

const IOPrimaryButton = styled(IOButton)`
  color: #fff;
  background-color: green;
`;

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{ themeColor: 'Chartreuse', fontSize: '30px' }}>
        App
        <h3>我是App的title</h3>
        <IOButton>我是普通的按钮</IOButton>
        <IOPrimaryButton>我是主要的按钮</IOPrimaryButton>
        <hr />
        <Home />
        <hr />
        <Profile />
      </ThemeProvider>
    );
  }
}
