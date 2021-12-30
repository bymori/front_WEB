/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-30 10:13:42
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-30 22:53:55
 */
import styled from 'styled-components';

export const PanelWrapper = styled.div`
  position: relative;
  flex: 1;
  margin: 21px 0 20px 0;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .lrc-content {
    .lrc-item {
      height: 32px;
      text-align: center;
      color: #989898;
      // 解决单行文字过长拥挤在一行 用以折行显示文本
      word-wrap: break-word;
      overflow: hidden;

      &.active {
        color: #fff;
        font-size: 14px;
      }
    }
  }
`;
