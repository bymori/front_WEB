/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-09 20:13:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-09 20:58:32
 */
const App = {
  template: `#mo`,
  data() {
    return {
      books: [
        {
          id: 1,
          name: '心安即是归处',
          data: '2020-07',
          price: 17.2,
          count: 1,
        },
        {
          id: 2,
          name: '活着',
          data: '2017-06',
          price: 35,
          count: 1,
        },
        {
          id: 3,
          name: '晚熟的人',
          data: '2020-07',
          price: 59,
          count: 1,
        },
        {
          id: 4,
          name: '山海经',
          data: '2014-05',
          price: 18,
          count: 1,
        },
        {
          id: 5,
          name: '局外人',
          data: '2019-06',
          price: 33.9,
          count: 1,
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      let finalPrice = 0;
      for (let book of this.books) {
        finalPrice += book.count * book.price;
      }
      return finalPrice.toFixed(1);
    },

    // Vue3不支持过滤器了，推荐两种做法： 使用计算属性/使用全局的方法
    filterBooks() {
      return this.books.map((item) => {
        const newItem = Object.assign({}, item);
        newItem.price = '￥' + item.price;
        return newItem;
      });
    },
  },
  methods: {
    increment(index) {
      //通过索引值获取对象
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeBook(index) {
      this.books.splice(index, 1);
    },
    formatPrice(price) {
      return '￥' + price;
    },
  },
};
Vue.createApp(App).mount('#app');
