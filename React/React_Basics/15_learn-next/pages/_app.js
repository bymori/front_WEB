/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-27 12:04:01
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-27 15:34:04
 */
import '../styles/globals.css';
import '../styles/app.css';

import Head from 'next/head';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>网易云音乐</title> {/* Head 标题 */}
      </Head>
      <header>
        <h2>Header</h2>
        <Link href="/">首页 </Link>
        <Link href="/about"> 关于</Link>
        <Link href="/profile"> profile</Link>
        <hr />
      </header>

      <Component {...pageProps} />

      <footer>
        <hr />
        <p>footer 网站的底部</p>
      </footer>
    </>
  );
}

export default MyApp;
