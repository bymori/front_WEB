/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-30 00:09:30
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-30 00:11:38
 */

/*

最终目标是以这样的方式配置路由：

app.get("/", function (req, res) {
    res.send('hello world')
})

*/

let app = function () {
  console.log('调用app方法');
  app.get();
  app.post();
};

app.get = function () {
  console.log('get方法');
};
app.post = function () {
  console.log('post方法');
};

//调用
// app.get();

app();
