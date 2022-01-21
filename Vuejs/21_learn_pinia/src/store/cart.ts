/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-21 17:31:41
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-21 20:54:23
 */
import { toNumber } from '@vue/shared';
import { defineStore } from 'pinia';
import { buyProducts, IProduct } from '../api/shop';

import { useProductsStore } from './products';

// { id, title, price, quantity }
type CarProduct = {
  quantity: number;
} & Omit<IProduct, 'inventory'>;

export const useCartStore = defineStore('cat', {
  state: () => {
    return {
      cartProducts: [] as CarProduct[], // 购物车商品列表
      checkoutStatus: null as null | string,
    };
  },

  getters: {
    totalPrice(state) {
      return state.cartProducts.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
    FormattingPrice() {
      console.log(this.totalPrice);

      var number = toNumber(this.totalPrice);

      //  这里如果直接写上 this.totalPrice.toLocaleString([locales[,options]]) 会出现错误 需要用 toNumber 进行包裹
      return number.toLocaleString('zh', {
        style: 'currency',
        currency: 'CNY',
        minimumFractionDigits: 2, // 默认小数位数为 2
        // 数字时 默认会进行四舍五入
        // 更多参数 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
      });
    },
  },

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

    async checkout() {
      const ret = await buyProducts();
      console.log('结算中');

      this.checkoutStatus = ret ? '成功' : '失败';

      if (ret) {
        this.cartProducts = [];
      }
    },
  },
});
