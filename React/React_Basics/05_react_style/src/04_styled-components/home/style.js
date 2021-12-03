/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-03 15:21:22
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-03 15:43:36
 */
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  font-size: 12px;
  color: red;

  .banner {
    background-color: blue;

    span {
      color: #fff;

      &.active {
        color: #f00;
      }

      &:hover {
        color: green;
      }

      &::after {
        content: 'aaa';
      }
    }

    /* .active {
      color: #f00;
    } */
  }
`;
export const TitleWrapper = styled.h2`
  text-decoration: underline;
  color: ${(props) => props.theme.themeColor};
  font-size: ${(props) => props.theme.fontSize};
`;
