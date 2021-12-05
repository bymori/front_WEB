/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-05 21:03:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-05 23:14:20
 */
import React, { PureComponent } from 'react';

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
            console.log('开始进入');
          }}
          onEntering={(el) => console.log('正在进入')}
          onEntered={(el) => {
            this.setState({ loading: false });
            console.log('进入完成');
          }}
          onExit={(el) => {
            this.setState({ loading: true });
            console.log('开始退出');
          }}
          onExiting={(el) => console.log('退出状态')}
          onExited={(el) => {
            this.setState({ loading: false });
            console.log('退出完成');
          }}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
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
