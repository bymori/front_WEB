/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-21 14:35:48
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-21 16:56:36
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
      foo: 'ioinn',
      arr: [1, 2, 3],
    };
  },

  /**
   * 类似于组件的 computed, 用来封装计算属性, 有缓存的功能
   */
  getters: {
    // 函数就收一个可选参数: state 状态对象
    count10(state) {
      console.log('count10 调用了');
      return state.count + 10;
      //   return this.count + 10;
    },

    // 如果在 getters 中使用了 this 则必须手动指定返回值的类型, 否则类型无法推导出来
    count11(): number {
      console.log('count11 调用了');
      return this.count + 10;
    },
  },

  /**
   * 类似于组件的 methods, 封装业务逻辑, 修改 state
   */
  actions: {
    // 注意不能使用箭头函数函数 action
    //  因为箭头函数不绑定this 就会去向上查找this
    changeState(num: number) {
      this.count += num;
      this.foo = 'momo';
      this.arr.push(4);

      // this.$patch({})
      // this.$patch(state => {})

      // $patch 和 普通多次修改的区别在原理上的区别是什么, 按理说多次修改也是批量提交
      //  this.count += num; 这种方式 每修改一个就要更新一次视图 如上 就发生三次
      //  $patch 则是全部修改完成后再统一修改视图 提高性能
    },
  },
});

// 2. 使用容器中的 state
// 3. 修改state
// 4. 容器中的 action 的使用
