/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-28 20:58:26
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-28 21:02:43
 */
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 2px solid #c20c0c;

  .left {
    display: flex;
    align-items: flex-end;

    .title {
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      margin-bottom: 0;
    }

    .count {
      margin-bottom: 5px;
      margin-left: 20px;
    }
  }

  .right {
    .count {
      color: #c20c0c;
    }
  }
`;
