/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 14:43:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-28 15:31:13
 */
import React, { memo, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import routes from './router';
import store from './store';

import IOAppHeader from 'components/app-header';
import IOAppFooter from 'components/app-footer';

import IOAppPlayerBar from './pages/player/app-player-bar';

function CustomRoutes() {
  let element = useRoutes(routes);
  return element;
}

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <IOAppHeader />

        {/* 用Suspense包裹动态导入的组件， 并设置属性 */}
        <Suspense fallback={<div>正在加载中..</div>}>
          <CustomRoutes />
        </Suspense>

        <IOAppFooter />
        <IOAppPlayerBar />
      </BrowserRouter>
    </Provider>
  );
});
