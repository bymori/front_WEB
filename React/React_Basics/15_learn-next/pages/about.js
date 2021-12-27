/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-27 12:08:39
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-27 15:47:03
 */

import React, { memo } from 'react';

// import AppLayout from '../components/app-layout';

// styled-jsx: 一种css in js的技术(next js默认集成了)
// styled-components

export default memo(function About() {
  return (
    <div>
      <h1>About</h1>
      <p>AboutAboutAboutAboutAbout</p>

      <style>{`
        p {
          color: blue;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
});
