/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-30 08:54:04
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-30 10:22:43
 */
import React, { memo, useRef, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { scrollTo } from '@/utils/ui-helper';

import { PanelWrapper } from './style';

export default memo(function IOLyricPanel() {
  const { lyricList, currentLyricIndex } = useSelector(
    (state) => ({
      lyricList: state.getIn(['player', 'lyricList']),
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex']),
    }),
    shallowEqual
  );

  // other hooks
  const panelRef = useRef();
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300);
  }, [currentLyricIndex]);

  return (
    <PanelWrapper ref={panelRef}>
      <div className="lrc-content">
        {lyricList.map((item, index) => {
          return (
            <div
              key={item.time}
              className={classNames('lrc-item', {
                active: index === currentLyricIndex,
              })}>
              {item.content}
            </div>
          );
        })}
      </div>
    </PanelWrapper>
  );
});
