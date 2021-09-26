/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-26 13:48:23
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-26 13:55:55
 */

import $ from 'jquery';
// 引入样式资源
import './index.less';
// 引入图片、字体等其他资源

$('#title').click(() => {
  $('body').css('backgroundColor', 'deeppink');
});
