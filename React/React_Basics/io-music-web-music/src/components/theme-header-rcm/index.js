/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-22 16:38:57
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-22 19:22:46
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { HeaderWrapper } from './style';

export default memo(function IOThemeHeaderRCM(props) {
  const { title, keywords } = props;

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <a href="todo" className="s-fc3">
                  {item}
                </a>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href="todo" className="s-fc3">
          更多
        </a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
});
