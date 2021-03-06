/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-04 17:09:45
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-04 20:28:15
 */
import React, { PureComponent } from 'react';

import CommentInput from './components/CommentInput';
import CommentItem from './components/CommentItem';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      commentList: [],
    };
  }

  render() {
    return (
      <div style={{ width: '500px', padding: '20px' }}>
        App
        {this.state.commentList.map((item, index) => {
          return (
            <CommentItem
              key={item.id}
              comment={item}
              removeItem={(e) => this.removeComment(index)}
            />
          );
        })}
        <CommentInput submitComment={this.submitComment.bind(this)} />
      </div>
    );
  }

  submitComment(info) {
    this.setState({
      commentList: [...this.state.commentList, info],
    });
  }

  removeComment(index) {
    const newCommentList = [...this.state.commentList];
    newCommentList.splice(index, 1);
    this.setState({
      commentList: newCommentList,
    });
  }
}
