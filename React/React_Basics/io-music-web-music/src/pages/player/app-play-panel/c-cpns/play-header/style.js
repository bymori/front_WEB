/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-30 08:28:54
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-30 08:40:46
 */
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  height: 41px;
  line-height: 41px;
  background: url(${require('@/assets/img/playpanel_bg.png')}) 0 0;
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 553px;
  padding: 0 25px;

  h3 {
    color: #e2e2e2;
    font-weight: 700;
  }

  .operator {
    color: #ccc;

    button {
      background-color: transparent;
      color: #ccc;
    }

    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      position: relative;
      top: 4px;
      right: 2px;
    }

    .favor {
      background-position: -24px 0;
      &:hover {
        background-position: -24px -20px;
      }
    }

    .remove {
      width: 13px;
      background-position: -51px 0;
      &:hover {
        background-position: -51px -20px;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 14px;
`;
