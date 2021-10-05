## Bootstrap5 框架技术详解 学习记录过程

### 快速入门
1. BS5安装与测试
   - [Bootstrap-V5官方](https://v5.bootcss.com/)
   - [Bootstrap-V5下载](https://v5.bootcss.com/docs/getting-started/download/)

   - [经过编译的 CSS 和 JS](0.assets/bootstrap-5.1.1-dist)
   - [源文件](0.assets/bootstrap-5.1.1)

2. FlexBox快速入门
   1. 开启：`display:flex;`
   2. 水平对齐：`justify-content:center;`
   3. 垂直对齐：`align-items:center;`
   4. 实例：三个div水平和垂直对齐

3. Sass入门
   - [Sass官网](http://www.sass-lang.com/)
   - [Sass中文网](https://www.sass.hk/)
   1. 安装
   2. 环境变量
   3. 编译器
   - vscode `Live Sass Compiler`
   4. 基础语法
      1. 变量
        ```scss
        $bgcolor: #555;
        $fgcolor: #cf0707;
        background-color: $bgcolor;
        color: $fgcolor;
        ```
      2. 嵌套
        ```scss
        $bgcolor: #555;
        $fgcolor: #cf0707;
        $fs: 30px;
      
        body {
          padding: 0px;
          margin: 0px;
          .main {
            background-color: $bgcolor;
            color: $fgcolor;
            font-weight: bold;
            font-size: $fs;
            width: 100px;
            height: 100px;
          }
        }
        ```
      3. 模块

         ```scss
         // _font.scss
         $bgcolor: #555;
         $fgcolor: #cf0707;
         $fs: 30px;
         
         // index.scss
         @use 'font' as fs;
         
         body {
           padding: 0px;
           margin: 0px;
           .main {
             background-color: fs.$bgcolor;
             color: fs.$fgcolor;
             font-weight: bold;
             font-size: fs.$fs;
             width: 100px;
             height: 100px;
           }
         }
         ```

         

      4. mixins

         ```scss
         $bgcolor: #555;
         $fgcolor: #cf0707;
         $fs: 30px;
         
         @mixin getFont($fs) {
           font-size: $fs;
         }
         body {
           padding: 0px;
           margin: 0px;
           .main {
             background-color: $bgcolor;
             color: $fgcolor;
             font-weight: bold;
             @include getFont(30px);
           }
         }
         ```

         

      5. 继承

         ```scss
         $bgcolor: #555;
         $fgcolor: #cf0707;
         $fs: 30px;
         
         %mainext {
           background-color: $bgcolor;
           color: $fgcolor;
           font-size: $fs;
         }
         body {
           padding: 0px;
           margin: 0px;
           .main {
             font-weight: bold;
             @extend %mainext;
           }
         }
         ```

         

      6. 运算

         ```scss
         $bgcolor: #555;
         $fgcolor: #cf0707;
         $fs: 30px * 2;
         
         %mainext {
           background-color: $bgcolor;
           color: $fgcolor;
           font-size: $fs;
         }
         body {
           padding: 0px;
           margin: 0px;
           .main {
             font-weight: bold;
             @extend %mainext;
           }
         }
         ```



### 布局

#### Available breakpoints

| **Breakpoint**    | **Class infix** | Dimensions |
| ----------------- | --------------- | ---------- |
| X-Small           | *None*          | <576px     |
| Small             | sm              | ≥576px     |
| Medium            | md              | ≥768px     |
| Large             | lg              | ≥992px     |
| Extra large       | xl              | ≥1200px    |
| Extra extra large | xxl             | ≥1400px    |

These breakpoints are customizable via Sass—you’ll find them in a Sass map in our `_variables.scss` stylesheet.

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

#### 视口-viewport

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```





