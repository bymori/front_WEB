<!--
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-21 17:03:42
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-21 19:44:38
-->
<template>
    <ul>
        <li v-for="(item, index) in ProductsStore.all" :key="item.id">
            {{ item.title }} - {{ item.price }} - 库存数量: {{ item.inventory }}
            <br />
            <!-- 如果商品库存为0 则按钮设置为不可点击状态 disabled-->
            <button :disabled="!item.inventory" @click="cartStore.addProductToCart(item)">添加到购物车</button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart';
import { useProductsStore } from '../store/products';

const ProductsStore = useProductsStore()

const cartStore = useCartStore()
// 加载所有数据
ProductsStore.loadAllProducts()


</script>
