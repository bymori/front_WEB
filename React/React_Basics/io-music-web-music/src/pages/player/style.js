/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-24 20:10:06
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-24 20:10:06
 */
import styled from 'styled-components';

export const PlayerWrapper = styled.div`
  .content {
    background: url(${require('@/assets/img/wrap-bg.png')}) repeat-y;
    background-color: #fff;
    display: flex;
  }
`;

export const PlayerLeft = styled.div`
  width: 710px;
`;

export const PlayerRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`;
