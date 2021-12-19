/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 14:43:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-19 15:41:48
 */
import React, { memo } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import routes from './router';

import IOAppHeader from 'components/app-header';
import IOAppFooter from 'components/app-footer';

function CustomRoutes() {
  let element = useRoutes(routes);
  return element;
}

export default memo(function App() {
  return (
    <BrowserRouter>
      <IOAppHeader />
      <CustomRoutes />
      <IOAppFooter />
    </BrowserRouter>
  );
});
