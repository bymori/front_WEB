/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-20 15:32:39
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-20 15:32:39
 */
import Mock from 'mockjs'

import homeApi from './mockServerData/home'
Mock.mock('/api/home/getData', homeApi.getStatisticalData)
