/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-03 16:54:31
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-14 22:05:33
 */
import React, { PureComponent } from 'react';

import { DatePicker, Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

import moment from 'moment';

import IOHomeRecommend from './components/home/childCpns/home-recommend';

import Aa from './React中添加class多种方式';

export default class App extends PureComponent {
  render() {
    const loadings = true;

    return (
      <>
        <Aa />
        <IOHomeRecommend />
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <br />
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => this.enterLoading(0)}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => this.enterLoading(1)}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => this.enterLoading(2)}
        />
        <DatePicker
          defaultValue={moment('2015-06-06', 'YYYY-MM-DD')}
          allowClear={false}
        />
      </>
    );
  }

  onChange(date, dateString) {
    console.log(date, dateString);
  }
}
