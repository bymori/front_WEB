# 包管理工具 Package Managers

## 认识NPM

npm(全称Node Package Manager，即node包管理器)
是Node.js默认的、以JavaScript编写的软件包管理系统
npm 来分享和使用代码已经成了前端的标配
[官网： https://www.npmjs.com/](https://www.npmjs.com/)

### 安装NPM工具

npm是Node.js默认的软件包管理系统
安装完毕node后，会默认安装好npm
npm本身也是基于Node.js开发的软件
[下载Node: https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)

### NPM的使用

- `npm -v`   通过查看版本，看npm是否安装成功
- `npm install <Module Name>`      使用 npm 命令安装模块
- `npm install <Module Name> -g`   可以直接在命令行里使用
- `npm list -g`  查看所有全局安装的模块
- `npm list vue` 查看某个模块的版本号
- `npm -g install npm@5.9.1`  （@后跟版本号）这样我们就可以更新npm版本
- `npm install -save moduleName`         # -save 在package文件的dependencies节点写入依赖。
- `npm install -save-dev moduleName`  # -save-dev 在package文件的devDependencies节点写入依赖dependencies：运行时的依赖，发布后，即生产环境下还需要用的模块
- devDependencies：开发时的依赖。里面的模块是开发时用的，发布时用不到它,比如项目中使用的 gulp ，压缩css、js的模块。这些模块在我们的项目部署后是不需要的

#### npm 镜像的设置与查看

搭建环境时通过如下代码将npm设置成淘宝镜像

```shell
 npm config set registry https://registry.npm.taobao.org --global
 npm config set disturl https://npm.taobao.org/dist --global
```

设置当前地址（设置为默认地址）

```shell
 npm config set registry https://registry.npmjs.org/
```

查看镜像的配置结果

```shell
 npm config get registry
 npm config get disturl  
```

使用nrm工具切换淘宝源

```shell
 npx nrm use taobao
```

 如果之后需要切换回官方源可使用

```shell
 npx nrm use npm
```

你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### Package.json 属性说明

- `name` - 包名。
- `version` - 包的版本号。
- `description` - 包的描述。
- `homepage` - 包的官网 url 。
- `author` - 包的作者姓名。
- `contributors` - 包的其他贡献者姓名。
- `dependencies` - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
- `repository` - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
- `main` - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
- `keywords` - 关键字

`package.json`文件中版本号的说明，安装的时候代表不同的含义：
`"5.0.3"`    表示安装指定的5.0.3版本
`"~5.0.3"`  表示安装5.0.X中最新的版本
`"^5.0.3"`  表示安装5.X.X中最新的版本

#### NPM 常用命令

NPM提供了很多命令，例如`install`和`publish`，使用`npm help`可查看所有命令。

- `npm help <command>`可查看某条命令的详细帮助，例如`npm help install`。
- 在`package.json`所在目录下使用`npm install . -g`可先在本地安装当前命令行程序，可用于发布前的本地测试。
- `npm update <package>`可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
- `npm update <package> -g`可以把全局安装的对应命令行程序更新至最新版。
- `npm cache clear`可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
- `npm unpublish <package>@<version>`可以撤销发布自己发布过的某个版本代码。

#### 包的使用

通过命令行使用 npm 下载和更新包
没有webpack之前搜寻整个 node_modules 目录来定位每个包的路径再手动添加到我们 HTML 文件中（实在太太不方便了）

大多数编程语言都会提供从一个文件导入另一个文件代码的机制。然而 JavaScript 最初设计时并没有这个特性，因为 JavaScript 原本是为了在浏览器端运行而设计的，并没有权限获取计算机客户端的文件系统（安全考虑）。所以很长一段时间以来，组织多个文件的 JavaScript 代码就是把每个文件下载下来，变量是全局共享的。

CommonJS 中很大的一部分便是对模块系统的规范，
使用require语句导入包
新的ES6可以使用import导入包

## Yarn是什么？

> “Yarn是由Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具 ，正如官方文档中写的，Yarn 是为了弥补 npm 的一些缺陷而出现的。因为NPM5以下会出现下面的问题：

- npm install的时候巨慢。特别是新的项目拉下来要等半天，删除node_modules，重新install的时候依旧如此。
- 同一个项目，多人开发时，由于安装的版本不一致出现bug
- [官网：www.yarnpkg.com](https://www.yarnpkg.com/)

### yarn的安装

下载node.js，使用npm安装

```bash
 npm install -g yarn
 查看版本：yarn --version
```

安装node.js,下载yarn的安装程序:

- 提供一个.msi文件，在运行时将引导您在Windows上安装Yarn

Yarn 淘宝源安装，分别复制粘贴以下代码行到黑窗口运行即可

```bash
 yarn config set registry https://registry.npm.taobao.org -g
 yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
```

### yarn的基本使用

```bash
#  初始化项目   同npm init，执行输入信息后，会生成package.json文件
yarn init      

#  安装package.json里所有包，并将包及它的所有依赖项保存进yarn.lock
yarn install     

#  安装一个包的单一版本
yarn install --flat   

#  强制重新下载所有包
yarn install --force   

#  只安装dependencies里的包
yarn install --production   

#  不读取或生成yarn.lock
yarn install --no-lockfile   

#  不生成yarn.lock
yarn install --pure-lockfile  

#  在当前的项目中添加一个依赖包，会自动更新到package.json和yarn.lock文件中
yarn add [package]   

#  安装指定版本，这里指的是主要版本，如果需要精确到小版本，使用-E参数
yarn add [package]@[version] 

#  安装某个tag（比如beta,next或者latest）
yarn add [package]@[tag]  

#  加到 devDependencies
yarn add --dev/-D  

#  加到 peerDependencies
yarn add --peer/-P    

#  加到 optionalDependencies
yarn add --optional/-O  
```

```bash
#  默认安装包的主要版本里的最新版本，下面两个命令可以指定版本：
yarn add --exact/-E   # 安装包的精确版本。例如yarn add foo@1.2.3会接受1.9.1版，但是yarn add foo@1.2.3 --exact只会接受1.2.3版
yarn add --tilde/-T   #安装包的次要版本里的最新版。例如yarn add foo@1.2.3 --tilde会接受1.2.9，但不接受1.3.0

发布包  yarn publish
移除一个包  yarn remove <packageName>     会自动更新package.json和yarn.lock
更新一个依赖  yarn upgrade 用于更新包到基于规范范围的最新版本
运行脚本  yarn run 用来执行在 package.json 中 scripts 属性下定义的脚本
显示某个包的信息 yarn info <packageName> 可以用来查看某个模块的最新版本信息

缓存  yarn cache
yarn cache list       # 列出已缓存的每个包 
yarn cache dir   # 返回 全局缓存位置
yarn cache clean  # 清除缓存
```

### yarn与npm的语法不同

|                      yarn | npm                              |
| ------------------------: | -------------------------------- |
|                 yarn init | npm init                         |
|                      yarn | npm install                      |
| yarn global add xxx@x.x.x | npm install xxx@x.x.x -g         |
|        yarn add xxx@x.x.x | npm install xxx@x.x.x --save     |
|  yarn add xxx@x.x.x --dev | npm install xxx@x.x.x --save-dev |
|           yarn remove xxx | npm uninstall xxx --save(-dev)   |
|              yarn run xxx | npm run xxx                      |

#### 其他文章

[yarn —— Nodejs包新管理工具](https://segmentfault.com/a/1190000007189426)
[yarn基础介绍](https://segmentfault.com/a/1190000022084808)
[yarn的使用及与npm的对比](https://segmentfault.com/a/1190000016807080)