/*
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 15:04:14
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 15:04:15
 */
export const demoMixin = {
  data() {
    return {
      message: 'Hello DemoMixin',
    };
  },
  methods: {
    foo() {
      console.log('demo mixin foo');
    },
  },
  created() {
    console.log('执行了demo mixin created');
  },
};