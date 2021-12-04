/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-04 17:10:51
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-04 20:25:32
 */
import React, { PureComponent } from 'react';

import { Comment, Tooltip, Avatar } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export default class CommentItem extends PureComponent {
  render() {
    const { nickname, avatar, content, dateTime } = this.props.comment;

    return (
      <Comment
        author={<a href="/#">{nickname}</a>}
        avatar={<Avatar src={avatar} alt={nickname} />}
        content={<p>{content}</p>}
        datetime={
          <Tooltip title={dateTime.format('YYYY-MM-DD HH:mm:ss')}>
            <span>{dateTime.fromNow()}</span>
          </Tooltip>
        }
        actions={[
          <span onClick={(e) => this.removeItem()}>
            <DeleteOutlined />
            删除
          </span>,
        ]}
      />
    );
  }

  removeItem() {
    this.props.removeItem();
  }
}
