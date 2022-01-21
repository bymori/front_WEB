/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-21 14:35:48
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-21 14:55:47
 */
import { defineStore } from 'pinia';

// 1. 定义并导出容器
//   参数1: 容器的 ID, 必须唯一, 将来 Pinia 会把所有的容器挂载到根容器
//   参数2: 选项对象
export const useMainState = defineStore('main', {
  /**
   * 类似于组件的 data, 用来存储全局状态的
   *   1. 必须是函数: 这样是为了在服务端渲染的时候避免交叉请求导致的数据污染
   *   2. 必须是箭头函数, 这样是为了更好的 TS 类型推导
   */
  state: () => {
    return {
      count: 100,
    };
  },

  getters: {},
  actions: {},
});

// 2. 使用容器中的 state
// 3. 修改state
// 4. 容器中的 action 的使用
