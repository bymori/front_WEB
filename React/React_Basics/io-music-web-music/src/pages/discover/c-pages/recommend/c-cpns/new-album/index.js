/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-22 19:45:18
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-23 14:30:54
 */
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getNewAlbumAction } from '../../store/actionCreators';

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import { AlbumWrapper } from './style';

export default memo(function IONewAlbum() {
  // redux hooks
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(['recommend', 'newAlbums']),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // getNewAlbums().then((res) => {
    //   setAlbums(res.albums);
    // });

    dispatch(getNewAlbumAction());
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架" />
      {newAlbums.map((item, index) => {
        return <div>{item.name}</div>;
      })}
    </AlbumWrapper>
  );
});
