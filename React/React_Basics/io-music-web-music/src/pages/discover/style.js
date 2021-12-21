/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-21 12:09:20
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-21 12:09:21
 */
import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
  .top {
    height: 30px;
    background-color: #c20c0c;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  position: relative;
  top: -4px;

  .item {
    a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;

      &:hover,
      &.active {
        text-decoration: none;
        background-color: #9b0909;
        border-radius: 20px;
      }
    }
  }
`;
