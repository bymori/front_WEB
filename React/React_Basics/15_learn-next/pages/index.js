/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-27 12:04:01
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-27 13:20:25
 */

import Image from 'next/image';
import styles from '../styles/Home.module.css';

// import AppLayout from '../components/app-layout';

export default function Home() {
  return (
    <div>
      <a href="/about">a 关于页面</a> {/* 后端渲染 */}
      {/*<Link href="/about">Link 关于页面</Link>*/} {/* 前端渲染 */}
      <h1>Home页面</h1>
    </div>
  );
}
