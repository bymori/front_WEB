/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-27 12:04:01
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-27 12:22:30
 */
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>网易云音乐</title> {/* Head 标题 */}
      </Head>
      <div>
        <h2>Header</h2>
        <Link href="/">首页 </Link>
        <Link href="/about"> 关于</Link>
        <hr />
      </div>
      <a href="/about">a 关于页面</a> {/* 后端渲染 */}
      <Link href="/about">Link 关于页面</Link> {/* 前端渲染 */}
      <h1>Home页面</h1>
      <div>
        <hr />
        <p>footer 网站的底部</p>
      </div>
    </div>
  );
}
