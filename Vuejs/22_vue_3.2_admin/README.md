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



