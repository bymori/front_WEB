/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 23:08:15
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-26 15:22:40
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// import IODiscover from 'page/discover';
const IODiscover = lazy(() => import('page/discover'));

const IORecommend = lazy(() => import('c-pages/recommend'));
const IORanking = lazy(() => import('c-pages/ranking'));
const IOSongs = lazy(() => import('c-pages/songs'));
const IODjradio = lazy(() => import('c-pages/djradio'));
const IOArtist = lazy(() => import('c-pages/artist'));
const IOAlbum = lazy(() => import('c-pages/album'));
const IOPlayer = lazy(() => import('page/player'));

const IOMine = lazy(() => import('page/mine'));
const IOFriend = lazy(() => import('page/friend'));
const IONoMatch = lazy(() => import('page/NoMatch'));

// c-pages  /discover/*
// import IORecommend from 'c-pages/recommend';
// import IORanking from 'c-pages/ranking';
// import IOSongs from 'c-pages/songs';
// import IODjradio from 'c-pages/djradio';
// import IOArtist from 'c-pages/artist';
// import IOAlbum from 'c-pages/album';
// import IOPlayer from 'page/player';

// import IOMine from 'page/mine';
// import IOFriend from 'page/friend';
// import IONoMatch from 'page/NoMatch';

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
