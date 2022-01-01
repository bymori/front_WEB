/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-31 14:09:08
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-01 23:21:45
 */
import styled from 'styled-components';

export const UserLoginWrapper = styled.div`
  height: 126px;
  background-position: 0 0;
  padding: 16px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    line-height: 25px;
  }

  a {
    margin-top: 10px;
    display: inline-block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    background-position: 0 -195px;
    text-shadow: 0 1px 0 #8a060b;

    :hover {
      background-position: -110px -195px;
    }
  }
`;

export const UserInfoWrapper = styled.div`
  width: 250px;
  height: 185px;
  box-sizing: border-box;

  .n-myinfo {
    height: 185px;
    padding-top: 20px;

    .f-cb {
      &::after {
        clear: both;
        content: '.';
        display: block;
        height: 0;
        visibility: hidden;
      }
    }

    .head {
      float: left;
      width: 86px;
      height: 86px;
      margin-left: 20px;
      padding: 2px;
      background: #fff;
      border: 1px solid #1f1919;
      position: relative;

      img {
        display: block;
        width: 80px;
        height: 80px;
      }

      .person-icn {
        position: absolute;
        top: 68px;
        left: 70px;
        height: 20px;
        width: 20px;
      }
    }

    .info {
      float: left;
      width: 115px;
      margin-left: 18px;
      padding-top: 3px;
    }

    .dny {
      margin: 22px 0 0 20px;
      padding-left: 0px;

      li {
        float: left;
        height: 40px;
        padding: 0 18px;

        border-right: 1px solid #e4e4e4;

        a {
          display: block;
          color: #666;
        }

        strong {
          display: block;
          font-size: 20px;
          font-weight: normal;
        }

        span {
          margin-left: 2px;
        }
      }

      .fst {
        padding-left: 0;
      }
      .lst {
        padding-right: 0;
        border-right: none;
      }
    }
  }

  .s-bg-5 {
    background-position: 0 -270px;
  }
`;
