/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 23:08:15
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-24 20:06:04
 */

import IODiscover from 'page/discover';

// c-pages  /discover/*
import IORecommend from 'c-pages/recommend';
import IORanking from 'c-pages/ranking';
import IOSongs from 'c-pages/songs';
import IODjradio from 'c-pages/djradio';
import IOArtist from 'c-pages/artist';
import IOAlbum from 'c-pages/album';
import IOPlayer from 'page/player';

import IOMine from 'page/mine';
import IOFriend from 'page/friend';
import IONoMatch from 'page/NoMatch';

import { Navigate } from 'react-router-dom';

const routes = [
  // 重定向
  { path: '/', element: <Navigate to={'/discover'} /> },
  {
    path: '/discover',
    element: <IODiscover />,
    children: [
      { path: '', element: <Navigate to={'recommend'} /> },
      { path: 'recommend', element: <IORecommend /> },
      { path: 'ranking', element: <IORanking /> },
      { path: 'songs', element: <IOSongs /> },
      { path: 'djradio', element: <IODjradio /> },
      { path: 'artist', element: <IOArtist /> },
      { path: 'album', element: <IOAlbum /> },
      { path: 'player', element: <IOPlayer /> },
    ],
  },
  {
    path: '/mine',
    element: <IOMine />,
  },
  {
    path: '/friend',
    element: <IOFriend />,
  },

  // 404找不到
  {
    path: '*',
    element: <IONoMatch />,
  },
];
export default routes;
