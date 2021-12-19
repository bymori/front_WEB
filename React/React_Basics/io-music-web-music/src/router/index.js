/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 23:08:15
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-19 15:40:30
 */

import IOPlayer from 'page/player';
import IOMine from 'page/mine';
import IODiscover from 'page/discover';
import IONoMatch from 'page/NoMatch';

const routes = [
  {
    path: '/',
    element: <IODiscover />,
  },
  {
    path: '/mine',
    element: <IOMine />,
  },
  {
    path: '/player',
    element: <IOPlayer />,
  },
  // 404找不到
  {
    path: '*',
    element: <IONoMatch />,
  },
];
export default routes;
