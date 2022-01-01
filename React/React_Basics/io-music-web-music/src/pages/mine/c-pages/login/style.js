/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-01 11:09:31
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-01 11:39:09
 */
import styled from 'styled-components';

export const LoginWrapper = styled.div`
  .ant-pro-form-login-container {
    /* width: 530px;
    margin: auto; */

    padding: 32px 0 24px;
    background-repeat: no-repeat;
    background-position: center 110px;
    background-size: 100%;

    .ant-pro-form-login-top {
      text-align: center;

      .ant-pro-form-login-header {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 44px;
        line-height: 44px;

        .ant-pro-form-login-logo {
          width: 44px;
          height: 44px;
          margin-right: 16px;
          vertical-align: top;

          img {
            max-width: 100%;
          }
        }

        .ant-pro-form-login-title {
          position: relative;
          top: 2px;
          color: rgba(0, 0, 0, 0.85);
          font-weight: 600;
          font-size: 33px;
        }
      }

      .ant-pro-form-login-desc {
        margin-top: 12px;
        margin-bottom: 40px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
    }

    .ant-pro-form-login-main {
      width: 328px;
      margin: 0 auto;

      .qrcode {
        width: 138px;
        height: 138px;
        box-shadow: 0px 0px 1px 1px rgba(28, 28, 32, 0.05),
          0px 8px 24px rgba(28, 28, 32, 0.12);
        padding: 8px;
        border-radius: 10px;
        margin: auto;

        img {
          width: 100%;
        }
      }

      .ant-pro-form-login-other {
        margin-top: 24px;
        line-height: 22px;
        text-align: left;
      }
    }
  }
`;
