/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-21 17:31:41
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-21 19:38:15
 */
import { defineStore } from 'pinia';
import { IProduct } from '../api/shop';

import { useProductsStore } from './products';

// { id, title, price, quantity }
type CarProduct = {
  quantity: number;
} & Omit<IProduct, 'inventory'>;

export const useCartStore = defineStore('cat', {
  state: () => {
    return {
      cartProducts: [] as CarProduct[], // 购物车商品列表
    };
  },

  getters: {},

  actions: {
    addProductToCart(product: IProduct) {
      console.log('addProductToCart', product);

      // 查看商品有没有库存
      if (product.inventory < 1) {
        return;
      }

      // 检查购物车中是否已经有该商品
      const cartItem = this.cartProducts.find((item) => item.id === product.id);
      if (cartItem) {
        // 如果有 则让商品数量+1
        cartItem.quantity++;
      } else {
        // 如果没有 则添加到购物车列表当中
        this.cartProducts.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      // 更新商品库存
      const productsStore = useProductsStore();
      productsStore.decrementProduct(product);
    },
  },
});
