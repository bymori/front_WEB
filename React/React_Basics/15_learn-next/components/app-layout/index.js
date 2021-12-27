/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-27 12:24:16
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-27 12:28:25
 */
import React, { memo } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default memo(function AppLayout(props) {
  //   console.log(props.children);
  return (
    <div>
      <Head>
        <title>网易云音乐</title> {/* Head 标题 */}
      </Head>
      <header>
        <h2>Header</h2>
        <Link href="/">首页 </Link>
        <Link href="/about"> 关于</Link>
        <hr />
      </header>
      {props.children}
      <footer>
        <hr />
        <p>footer 网站的底部</p>
      </footer>
    </div>
  );
});
