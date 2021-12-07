/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 11:19:01
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-07 10:45:34
 */
import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';

// import { StoreContext } from './utils/context';
import { Provider } from 'react-redux';

import App from './App';

ReactDOM.render(
  // <Provider value={store}>
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
