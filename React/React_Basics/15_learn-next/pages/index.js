/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-27 12:04:01
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-27 16:54:58
 */

import Image from 'next/image';
import styles from '../styles/Home.module.css';

// import AppLayout from '../components/app-layout';
import Link from 'next/link';

import Router from 'next/router';
import axios from 'axios';

const Home = function (props) {
  const { name, banners, recommends } = props;

  const recommendItemClick = (item) => {
    Router.push({
      pathname: '/recommend',
      query: {
        id: item,
      },
    });
  };

  return (
    <div>
      <a href="/about">a 关于页面</a> {/* 后端渲染 */}
      {/*<Link href="/about">Link 关于页面</Link>*/} {/* 前端渲染 */}
      <h1 className={styles.title}>Home页面</h1>
      <h2>Banner</h2>
      <h2>推荐数据</h2>
      {[1, 2, 3].map((item, index) => {
        return (
          <div>
            {/* <Link key={item} href={`/recommend?id=${item}`}>
              <li>推荐数据id:{item}</li>
            </Link> */}
            <li key={item} onClick={(e) => recommendItemClick(item)}>
              推荐数据id:{item}
            </li>
          </div>
        );
      })}
      <h2>name: {name}</h2>
      <h2>轮播图数据:</h2>
      <ul>
        {banners.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
      <ul>
        {recommends.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

Home.getInitialProps = async (props) => {
  const res = await axios({ url: 'http://123.207.32.32:8000/home/multidata' });

  return {
    name: 'momo',
    banners: res.data.data.banner.list,
    recommends: res.data.data.recommend.list,
  };
};

export default Home;
