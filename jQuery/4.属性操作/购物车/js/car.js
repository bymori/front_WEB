/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-24 14:02:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-24 17:13:55
 */

$(function () {
  // 1. 全选 全不选功能模块
  // 就是把全选按钮（checkall）的状态赋值给 三个小的按钮（j-checkbox）就可以了
  // 事件可以使用change
  $('.checkall').change(function () {
    // console.log($(this).prop('checked'));
    $('.j-checkbox,.checkall').prop('checked', $(this).prop('checked'));
    if ($(this).prop('checked')) {
      // 让所有的商品添加 check-cart-item 类名
      $('.cart-item').addClass('check-cart-item');
    } else {
      // check-cart-item 移除
      $('.cart-item').removeClass('check-cart-item');
    }
    // $('.cart-item').toggleClass('check-cart-item');
    getSum();
  });

  // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
  $('.j-checkbox').change(function () {
    // if(被选中的小的复选框的个数 === 3) {
    //     就要选中全选按钮
    // } else {
    //     不要选中全选按钮
    // }

    // console.log($('.j-checkbox:checked').length);
    // $('.j-checkbox').length)  // 所有的小复选框个数
    if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
      $('.checkall').prop('checked', true);

      getSum();
    } else {
      $('.checkall').prop('checked', false);
      getSum();
    }
    $(this).parents('.cart-item').toggleClass('check-cart-item');
  });

  // 3. 增减商品数量模块 首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框。
  $('.increment').click(function () {
    // 得到当前兄弟文本框的值
    var n = $(this).siblings('.itxt').val();
    // console.log(n);
    n++;
    $(this).siblings('.itxt').val(n);

    // 3. 计算小计模块 根据文本框的值 乘以 当前商品的价格  就是 商品的小计
    // 当前商品的价格 p
    // var p = $(this).parent().parent().siblings('.p-price').html().substr(1);
    var p = $(this).parents('.p-num').siblings('.p-price').html().substr(1);
    // p = p.substr(1);
    // console.log(p);

    // 小计模块
    // toFixed(2) 可以让我们保留2位小数
    /* $(this)
      .parent()
      .parent()
      .siblings('.p-sum')
      //   .html('￥' + p * n);
      .html('￥' + (p * n).toFixed(2)); */
    $(this)
      .parents('.p-num')
      .siblings('.p-sum')
      .html('￥' + (p * n).toFixed(2));
    getSum();
  });

  $('.decrement').click(function () {
    // 得到当前兄弟文本框的值
    var n = $(this).siblings('.itxt').val();
    if (n <= 1) {
      return false;
    }
    n--;
    $(this).siblings('.itxt').val(n);

    // 3. 计算小计模块 根据文本框的值 乘以 当前商品的价格  就是 商品的小计
    // 当前商品的价格 p
    var p = $(this).parents('.p-num').siblings('.p-price').html().substr(1);
    // console.log(p);

    // 小计模块
    // toFixed(2) 可以让我们保留2位小数
    $(this)
      .parents('.p-num')
      .siblings('.p-sum')
      .html('￥' + (p * n).toFixed(2));
    getSum();
  });

  //  4. 用户修改文本框的值 计算 小计模块
  //   $('.itxt').bind('input', function () {
  $('.itxt').on('input propertychange', function () {
    let v = this.value.replace(/[^0-9]/g, '');
    var n = (this.value = v == '' && 0 ? 1 : v * 1);

    // 先得到文本框的里面的值 乘以 当前商品的单价
    // console.log('v', v);
    // 当前商品的单价
    var p = $(this).parents('.p-num').siblings('.p-price').html().substr(1);

    $(this)
      .parents('.p-num')
      .siblings('.p-sum')
      .html('￥' + (p * n).toFixed(2));
    getSum();
  });

  // 5. 计算总计和总额模块
  getSum();
  function getSum() {
    var count = 0; // 计算总件数
    var money = 0; // 计算总价钱
    $('.itxt').each(function (i, ele) {
      if ($('.j-checkbox').eq(i).prop('checked')) count += $(ele).val() * 1;
    });
    $('.amount-sum em').text(count);
    $('.p-sum').each(function (i, ele) {
      if ($('.j-checkbox').eq(i).prop('checked'))
        money += $(ele).text().substr(1) * 1;
    });
    $('.price-sum em').text('￥' + money.toFixed(2));
  }
  // 6. 删除商品模块
  // DeleteEmptying 删除商品后 清空价格 和全选按钮
  function DeleteEmptying() {
    if ($('.j-checkbox').length === 0) {
      $('.checkall').prop('checked', false);
    }
    getSum();
  }
  // (1) 商品后面的删除按钮
  $('.p-action a').click(function () {
    // 删除的是当前的商品
    $(this).parents('.cart-item').remove();
    DeleteEmptying();
  });

  // (2) 删除选中的商品
  $('.remove-batch').click(function () {
    $('.j-checkbox:checked').parents('.cart-item').remove();
    DeleteEmptying();
  });
  // (3) 清空购物车 删除全部商品
  $('.clear-all').click(function () {
    $('.cart-item').remove();
    DeleteEmptying();
  });
});
