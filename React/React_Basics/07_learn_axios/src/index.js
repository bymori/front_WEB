/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-04 20:41:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-05 10:33:08
 */
import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import App from './App';

// 7.默认配置
axios.defaults.baseURL = 'https://httpbin.org';
axios.defaults.timeout = 5000;
axios.defaults.headers.common['token'] = 'tokentokentoken';
// axios.defaults.headers.post['Content-Type'] = 'application/text';

ReactDOM.render(<App />, document.getElementById('root'));
