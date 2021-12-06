/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 11:19:01
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-06 22:49:10
 */
import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';

import { StoreContext } from './utils/context';

import App from './App';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);
