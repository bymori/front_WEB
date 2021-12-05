/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-04 21:26:20
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-05 10:40:50
 */
import React, { PureComponent } from 'react';

import axios from 'axios';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    // 1.真实开发逻辑: 拿到数据
    // this.setState({
    //   products: [...this.state.products, ...res],
    // });
    //
    // 2.axios发送基本的网络请求
    // axios({
    //   url: 'https://httpbin.org/get',
    //   params: {
    //     name: 'momo',
    //     age: 19,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    // axios({
    //   url: 'https://httpbin.org/post',
    //   data: {
    //     name: 'mori',
    //     age: 29,
    //   },
    //   method: 'post',
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    //
    // 3.axios发送get/post
    // axios
    //   .get('https://httpbin.org/get', {
    //     params: {
    //       name: 'momo',
    //       age: 30,
    //     },
    //   })
    //   .then(console.log);
    // axios
    //   .post('https://httpbin.org/post', {
    //     name: 'Ford',
    //     age: 28,
    //   })
    //   .then(console.log);
    //
    // 4.await async
    // try {
    //   const result = await axios.get('https://httpbin.org/get', {
    //     params: {
    //       name: 'Vilma',
    //       age: 30,
    //     },
    //   });
    //   console.log(result);
    // } catch (err) {
    //   console.log(err);
    // }
    //
    // 5.axios.all === Promise.all
    // const request1 = axios({
    //   // url: 'https://httpbin.org/get',
    //   url: '/get',
    //   params: { name: 'momo', age: 18 },
    // });
    // const request2 = axios({
    //   // url: 'https://httpbin.org/post',
    //   url: '/post',
    //   data: { name: 'mori', age: 40 },
    //   method: 'post',
    // });
    // axios.all([request1, request2]).then(([res1, res2]) => {
    //   console.log(res1, res2);
    // });
    //
    // 6.Promise.all
    // const promise1 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('promise1');
    //   }, 1000);
    // });
    // const promise2 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('promise2');
    //   }, 3000);
    // });
    // Promise.all([promise1, promise2]).then((res) => {
    //   console.log(res);
    // });
    //
    // 7. index.js  默认配置
    //
    // 8.创建新的实例
    const instance1 = axios.create({
      baseURL: 'http://ioinn.cn',
      timeout: 5000,
      headers: {},
    });

    const instance2 = axios.create({
      baseURL: 'http://baidu.com',
      timeout: 10000,
      headers: {},
    });
  }

  render() {
    return <div>a</div>;
  }
}
