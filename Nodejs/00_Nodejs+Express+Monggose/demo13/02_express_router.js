/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-30 00:09:30
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-30 00:22:20
 */
/*

最终目标是以这样的方式配置路由：

app.get("/", function (req, res) {
    res.send('hello world')
})

*/

let Glob = {};

let app = function (req, res) {
  //   console.log('调用app方法');
  if (Glob['/login']) {
    Glob['/login'](req, res); //执行方法
  }
};

app.get = function (string, callback) {
  // 注册方法
  Glob[string] = callback;

  /**
   *    G['/login']=function (req, res) {
   *        res.send('hello world')
   *    }
   */
};

//  配置路由
app.get('/login', function (req, res) {
  //   res.send('hello world');
  console.log('执行login方法');
});

setTimeout(() => {
  app('req', 'res');
}, 300);
