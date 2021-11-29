/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-29 10:43:22
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-29 11:58:43
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TabControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 1,
    };
  }

  render() {
    // const { titles, currentIndex } = this.props;
    const { titles } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="tab-control">
        {titles.map((item, index) => {
          return (
            <div
              key={item}
              className={'tab-item ' + (index === currentIndex ? 'active' : '')}
              onClick={(e) => this.itemClick(index)}>
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    );
  }

  itemClick(index) {
    this.setState({
      currentIndex: index,
    });

    const { itemClick } = this.props;
    itemClick(index);
  }
}

TabControl.propTypes = {
  titles: PropTypes.array.isRequired,
};
