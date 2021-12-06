/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-05 21:03:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-06 10:48:53
 */
import React, { PureComponent } from 'react';

import './CSSTransition.css';

import { CSSTransition } from 'react-transition-group';

import { Card, Avatar, Switch } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

export default class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
      loading: false,
    };
  }

  render() {
    const { isShow, loading } = this.state;

    return (
      <div>
        <Switch
          checkedChildren="显示"
          unCheckedChildren="隐藏"
          //   defaultChecked
          onClick={(e) => {
            this.setState({ isShow: !isShow });
          }}
          checked={isShow}
          loading={loading}
        />

        <br />
        <br />

        <CSSTransition
          in={isShow}
          classNames="card"
          timeout={300}
          unmountOnExit={true}
          appear
          onEnter={(el) => {
            this.setState({ loading: true });
            console.log('1 开始进入');
          }}
          onEntering={(el) => console.log('2 正在进入')}
          onEntered={(el) => {
            this.setState({ loading: false });
            console.log('3 进入完成');
          }}
          onExit={(el) => {
            this.setState({ loading: true });
            console.log('4 开始退出');
          }}
          onExiting={(el) => console.log('5 退出状态')}
          onExited={(el) => {
            this.setState({ loading: false });
            console.log('6 退出完成');
          }}>
          <Card
            style={{ width: 300, margin: '0 auto' }}
            cover={
              <img
                alt="example"
                src="https://cdn.jsdelivr.net/gh/bymori/image-PicX@main/blog/image.69uvm447wr80.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}>
            <Meta
              avatar={
                <Avatar src="https://cdn.jsdelivr.net/gh/bymori/image-PicX@main/blog/image.69uvm447wr80.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    );
  }
}
