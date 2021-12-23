/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-22 15:12:42
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-23 23:31:50
 */
import styled from 'styled-components';

export const BannerWrapper = styled.div`
  background: url(${(props) => props.bgImage}) center center/6000px;

  .banner {
    height: 285px;
    background-color: red;

    display: flex;
    position: relative;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 285px;
    .image {
      width: 100%;
      height: 100%;
    }
  }
`;

export const BannerRight = styled.a.attrs({
  href: '/download',
  target: '_blank',
})`
  width: 254px;
  height: 285px;
  background: url(${require('@/assets/img/download.png')});
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;
    border-width: 0px;
    margin-top: -31px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
