/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 14:43:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-22 14:19:49
 */
import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import routes from './router';
import store from './store';

import IOAppHeader from 'components/app-header';
import IOAppFooter from 'components/app-footer';

function CustomRoutes() {
  let element = useRoutes(routes);
  return element;
}

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <IOAppHeader />
        <CustomRoutes />
        <IOAppFooter />
      </BrowserRouter>
    </Provider>
  );
});
