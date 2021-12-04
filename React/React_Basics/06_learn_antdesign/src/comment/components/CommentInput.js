/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-04 17:10:39
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-04 19:37:41
 */
import React, { PureComponent } from 'react';
import moment from 'moment';

import { Input, Button } from 'antd';

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  render() {
    return (
      <div>
        <Input.TextArea
          rows={4}
          value={this.state.content}
          onChange={(e) => this.handleChange(e)}
        />
        <Button type="primary" onClick={(e) => this.addComment()}>
          添加评论
        </Button>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  addComment() {
    const commentInfo = {
      id: moment().valueOf(),
      avatar:
        'https://cdn.jsdelivr.net/gh/bymori/image-PicX@main/blog/image.69uvm447wr80.png',
      nickname: 'momo',
      dateTime: moment(),
      content: this.state.content,
      comments: [],
    };

    this.props.submitComment(commentInfo);

    this.setState({
      content: '',
    });
  }
}
