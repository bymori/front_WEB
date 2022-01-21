<!--
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-21 17:03:57
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-21 21:06:03
-->
<template>
    <div class="cart">
        <h2>你的购物车</h2>
        <p>
            <i>请添加一些商品到购物车</i>
        </p>
        <ul>
            <li v-if="!cartStore.cartProducts.length">当然购物车还没有物品o 请添加一些吧</li>
            <li
                v-else
                v-for="(item, index) in cartStore.cartProducts"
                :key="index"
            >{{ item.title }} - {{ item.price }} x {{ item.quantity }}</li>
        </ul>
        <p v-show="!!cartStore.cartProducts.length">商品总价: {{ cartStore.FormattingPrice }}</p>
        <p v-show="!!cartStore.cartProducts.length">
            <button @click="cartStore.checkout">结算</button>
        </p>
        <p
            v-show="cartStore.checkoutStatus && !cartStore.cartProducts.length"
        >结算{{ cartStore.checkoutStatus }}</p>
    </div>
</template>
<script setup lang="ts">
import { useCartStore } from '../store/cart'

const cartStore = useCartStore()
</script>