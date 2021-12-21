/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 23:08:15
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-21 12:07:29
 */

import IOPlayer from 'page/player';
import IOMine from 'page/mine';
import IODiscover from 'page/discover';
import IOFriend from 'page/friend';
import IONoMatch from 'page/NoMatch';

import { Navigate } from 'react-router-dom';

const routes = [
  {
    path: '/discover',
    element: <IODiscover />,
    children: [
      { path: 'history', element: <IOMine /> },
      { path: 'culture', element: <IOPlayer /> },
    ],
  },
  {
    path: '/mine',
    element: <IOMine />,
  },
  {
    path: '/player',
    element: <IOPlayer />,
  },
  {
    path: '/friend',
    element: <IOFriend />,
  },
  // 重定向
  { path: '/', element: <Navigate to={'/discover'} /> },
  // 404找不到
  {
    path: '*',
    element: <IONoMatch />,
  },
];
export default routes;
