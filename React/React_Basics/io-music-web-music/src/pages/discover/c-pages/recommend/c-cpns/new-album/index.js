/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-22 19:45:18
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-23 16:53:50
 */
import React, { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getNewAlbumAction } from '../../store/actionCreators';

import { Carousel } from 'antd';

import IOAlbumCover from '@/components/album-cover';
import IOThemeHeaderRCM from '@/components/theme-header-rcm';
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

  const pageRef = useRef();

  useEffect(() => {
    // getNewAlbums().then((res) => {
    //   setAlbums(res.albums);
    // });

    dispatch(getNewAlbumAction());
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <IOThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}></button>

        <div className="album">
          <Carousel dots={false} ref={pageRef} autoplay>
            {[0, 1, 2].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 4, (item + 1) * 4).map((iten) => {
                    return (
                      <IOAlbumCover
                        key={iten.id}
                        info={iten}
                        size={100}
                        width={118}
                        bgp="-570px"
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>

        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  );
});
