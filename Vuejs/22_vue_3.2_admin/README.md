# 22_vue_3.2_admin

## Project setup
```
yarn install
```

### 创建项目

```shell
vue create 22_vue_3.2_admin

? Please pick a preset: Manually select features 
#第一步 选择手动配置
? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex, CSS Pre-processors, Linter 
#第二步 选择Vue版本 Babel Router Vuex CSS预处理器 Linter
? Choose a version of Vue.js that you want to start the project with 3.x 
#第三步 选择Vue3.x版本
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes 
#第四步 设置 router history 模式
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass) 
#第五步 选择 Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Standard 
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N) N
```

安装axios包 由于脚手架自带vue版本为3.0 则需要升级vue版本至3.2 及升级其他依赖

```shell
yarn add  axios vue@3.2.8 vue-router@4.0.11 vuex@4.0.2
```

### 代码格式提交规范

在Vscode插件中安装`prettier`

在根目录下创建`.prettierrc`配置文件

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none"
}
```

在配置下`.eslintrc.js`里的`rules` 新增 一段 为了解决`eslint`与`prettier`冲突

```js
rules: {
  ...,
  indent: 0,
  'space-before-function-paren': 0
}
```

## git代码提交规范

1.安装commitizen和cz-customizable

```shell
yarn add commitizen cz-customizable -D
```

2.在package.json中进行新增

```js
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

### 创建项目

```shell
yarn add element-plus@1.3.0-beta.5
```