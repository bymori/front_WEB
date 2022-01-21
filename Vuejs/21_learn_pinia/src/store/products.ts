/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-21 17:16:31
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-21 19:27:28
 */
import { defineStore } from 'pinia';
import { getProducts, IProduct } from '../api/shop';

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      all: [] as IProduct[], // 所有商品列表
    };
  },

  getters: {},

  actions: {
    async loadAllProducts() {
      const ret = await getProducts();
      this.all = ret;
    },

    decrementProduct(product: IProduct) {
      const ret = this.all.find((item) => item.id === product.id);

      if (ret) {
        ret.inventory--;
      }
    },
  },
});
