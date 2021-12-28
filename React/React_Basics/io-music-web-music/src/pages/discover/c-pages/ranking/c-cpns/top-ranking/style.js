/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-28 16:03:58
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-28 16:43:08
 */
import styled from 'styled-components';

export const TopRankingWrapper = styled.div`
  padding: 25px 0;

  .header {
    padding: 0 10px 12px 15px;
    font-size: 14px;
    color: #000;
    font-family: simsun;
    font-weight: 900;
  }

  .item {
    height: 62px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover,
    &.active {
      background-color: #e6e6e6;
    }

    img {
      width: 40px;
      height: 40px;
    }

    .info {
      margin-left: 10px;

      .name {
        color: #000;
      }

      .update {
        margin-top: 5px;
        color: #999;
      }
    }
  }
`;
