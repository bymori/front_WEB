/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 22:59:00
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-20 22:46:07
 */
import React, { memo, Fragment } from 'react';

import { footerLinks, footerImages } from '@/common/local-data';

import { AppFooterWrapper, FooterLeft, FooterRight } from './style';

export default memo(function IOAppFooter() {
  return (
    <AppFooterWrapper>
      <div className="wrap-v2 content">
        <FooterLeft className="left">
          <div className="link">
            {footerLinks.map(({ title, link }) => {
              return (
                <Fragment key={title}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                  <span className="line">|</span>
                </Fragment>
              );
            })}
          </div>
          <div className="copyright">
            <span>****版权所有©1997-2021</span>
            <span>
              *****运营：
              <a
                href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
                rel="noopener noreferrer"
                target="_blank">
                *网文[20**]***-***号
              </a>
            </span>
          </div>
          <div className="report">
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>
              举报邮箱：
              <a
                href="mailto:ncm5990@163.com"
                target="_blank"
                rel="noopener noreferrer">
                ncm5990@163.com
              </a>
            </span>
          </div>
          <div className="info">
            <span>粤B2-20090191-18</span>
            <a
              href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
              rel="noopener noreferrer"
              target="_blank">
              工业和信息化部备案管理系统网站
            </a>
          </div>
        </FooterLeft>
        <FooterRight className="right">
          {footerImages.map(({ title, link }, index) => {
            return (
              <li className="item" key={link}>
                <a
                  className="link"
                  href={link}
                  rel="noopener noreferrer"
                  target="_blank">
                  {' '}
                </a>
                <span className="title">{title}</span>
              </li>
            );
          })}
        </FooterRight>
      </div>
    </AppFooterWrapper>
  );
});
