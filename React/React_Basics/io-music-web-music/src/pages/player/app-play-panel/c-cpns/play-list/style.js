/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-30 08:44:19
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-30 15:10:45
 */
import styled from 'styled-components';

export const PlayListWrapper = styled.div`
  position: relative;
  width: 553px;
  padding: 2px;

  .play-item {
    padding: 0 8px 0 25px;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    line-height: 28px;
    color: #ccc;
    cursor: pointer;

    &.active {
      color: #fff;
      background-color: #000;

      ::before {
        content: '';
        position: absolute;
        left: 8px;
        width: 10px;
        height: 13px;
        background: url(${require('@/assets/img/playlist_sprite.png')}) -182px 0;
      }
    }
    &:hover {
      color: #fff;
      background-color: #000;
      .operate {
        display: block;
      }
    }

    .operate {
      display: flex;
      align-items: center;
      display: none;
      width: 100px;
      /* margin-left: auto;
      margin-right: 8px;
      margin-top: 5px; */

      margin: 5px 8px 0 auto;

      .btn {
        height: 16px;
        margin-left: 8px;
        border-width: 0px;
        cursor: pointer;
      }

      .like {
        width: 16px;
        background-position: -24px -0;
        &:hover {
          background-position: -24px -20px;
        }
      }

      .share {
        width: 14px;
        background-position: 0 0;
        &:hover {
          background-position: 0 -20px;
        }
      }
      .download {
        width: 14px;
        background-position: -57px -50px;
        &:hover {
          background-position: -80px -50px;
        }
      }
      .delete {
        width: 13px;
        background-position: -51px 0;
        &:hover {
          background-position: -51px -20px;
        }
      }
    }

    .right {
      display: flex;
      align-items: center;

      .singer {
        width: 80px;
      }

      .duration {
        width: 45px;
      }

      .link {
        margin-left: 20px;
        width: 14px;
        height: 16px;
        background-position: -100px 0;
        &:hover {
          background-position: -80px -20px;
        }
      }
    }
  }
`;
