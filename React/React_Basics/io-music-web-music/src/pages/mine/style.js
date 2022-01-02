/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-31 14:13:06
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-02 19:36:13
 */
import styled from 'styled-components';

export const MineWrapper = styled.div`
  --color-primary: #425de8;
  --color-primary-bg: #ebeffd;
  --color-seconder-bg: #f5f5f7;

  .content {
    background-color: #fff;
    min-height: 700px;

    .pic {
      position: relative;
      width: 807px;
      height: 372px;
      margin: 0 auto;
      background: url(${require('@/assets/img/mine_sprite.png')}) 0 104px
        no-repeat;

      .login {
        position: absolute;
        width: 167px;
        height: 45px;
        left: 482px;
        top: 302px;
        text-indent: -9999px;
      }
    }

    .userDetail {
      padding: 28px;
      .userHeader {
        font-size: 42px;
        color: var(--color-text);
        display: flex;
        align-items: center;

        .avatar {
          height: 44px;
          margin-right: 12px;
          vertical-align: -7px;
          border-radius: 50%;
          border: rgba(0, 0, 0, 0.2);
        }
      }

      .section-one {
        display: flex;
        margin-top: 24px;

        .liked-songs {
          flex: 3;
          margin-top: 8px;
          cursor: pointer;
          border-radius: 16px;
          padding: 18px 24px;
          display: flex;
          flex-direction: column;
          transition: all 0.4s;
          box-sizing: border-box;
          background: var(--color-primary-bg);

          .top {
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            font-size: 14px;
            opacity: 0.88;
            color: var(--color-primary);
          }

          .bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--color-primary);

            .titles {
              .title {
                font-size: 24px;
                font-weight: 700;
              }

              .sub-title {
                font-size: 15px;
                margin-top: 2px;
              }
            }

            button {
              margin-bottom: 2px;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 44px;
              width: 44px;
              background: var(--color-primary);
              border-radius: 50%;
              transition: 0.2s;
              box-shadow: 0 6px 12px -4px rgb(0 0 0 / 20%);
              cursor: default;
            }
          }
        }

        .songs {
          flex: 7;
          margin-top: 8px;
          margin-left: 36px;
          overflow: hidden;

          .track-list {
            display: grid;
            gap: 4px;
            grid-template-columns: repeat(3, 1fr);
            .list {
              display: flex;
              align-items: center;
              padding: 8px;
              border-radius: 12px;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;

              img {
                height: 36px;
                width: 36px;
                border-radius: 6px;
                margin-right: 14px;
                cursor: pointer;
              }
              .title-and-artist {
                flex: 1;
                display: flex;
                .container {
                  display: flex;
                  flex-direction: column;
                  .title {
                    font-size: 16px;
                  }
                  .artist {
                    font-size: 12px;
                  }
                }
              }

              &:hover {
                transition: all 0.3s;
                background: var(--color-seconder-bg);
              }
            }
          }
        }
      }
    }
  }
`;
