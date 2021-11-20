# Docker

- Docker概述
- Docker安装
- Docker命令
  - 镜像命令
  - 容器命令
  - 操作命令
- Docker镜像！
- 容器数据卷！
- DockerFile
- Docker网络原理
- IDEA整合Docker
- Docker Compose
- Docker Swarm
- CI\CD Jenkins

## Docker概述

### Docker为什么出现？

一款产品分为：开发--上线 两套环境，应用环境，应用配置
环境配置繁琐 需要每个机器上部署环境
发布一个项目(jar + (Redis MySQL jdk ES)),项目能不能都带上环境安装打包！
之前在服务器配置一个应用的环境Redis MySQL jdk Es Hadoop ，配置超麻烦了，不能够跨平台。
Windows，最后发布到Linux!
传统：开发jar，运维来做！
现在：开发打包部署上线，一套流程做完！

java - apk--发布（应用商店）---张三使用apk --安装即可用！
java -- jar （环境）----打包项目带上环境（镜像）---(Docker仓库：商店)---下载我们发布的镜像一直接运行即可！

Docker给以上的问题，提出了解决方案！

![image-20211007200022942](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211007200022942.png)

Docker的思想就来自于集装箱！
JRE -- 多个应用（端口冲突）--原来都是交叉的！
隔离：Docker核心思想！打包装箱！每个箱子是互相隔离的。
Docker通过隔离机制，可以将服务器利用到极致！

### Docker的历史

Docker 非常轻巧

虚拟机：在window中装一 个Vmware，通过这个软件我们可以虚拟出来一 台或者多台电脑！笨重！

虚拟机也是属于虚拟化技术，Docker容器技术，也是一种虚拟化技术！

```
vm:linux centos原生镜像(一个电脑！) 隔离，需要开启多个虚拟机！几个G几分钟

docker:隔离，镜像(最核心的环境4m + jdk + mysq1) 十分的小巧，运行镜像就可以了！小巧！几个MKB秒级启动！
```

Docker是基于Go语言开发的！开源项目！

官网：<https://www.docker.com/>

文档地址：<https://docs.docker.com/>

仓库地址：<https://hub.docker.com/>  可以是用git命令

### Docker可以做什么

> 之前的虚拟机技术

虚拟机技术缺点：
1、资源占用十分多
2、冗余步骤多
3、启动很慢！

> 容器化技术

容器化技术不是模拟的一个完整的操作系统

比较Docker和虚拟机技术的不同：

- 传统虚拟机，虚拟出一条硬件，运行一个完整的操作系统，然后在这个系统，上安装和运行软件
- 容器内的应用直接运行在宿主机的内容，容器是没有自己的内核的，也没有虚拟我们的硬件，所以就轻便了
- 每个容器间是互相隔离， 每个容器内都有一个属于自己的文件系统，互不影响。

> DevOps (开发 运维)

**应用更快速的交付和部署**
传统：一堆帮助文档，安装程序
Docker:打包镜像发布测试，一键运行
**更便捷的升级和扩缩容**
使用了Docker之后，我们部署应用就和搭积木一样！
项目打包为一个镜像，扩展服务器A!服务器B
**更简单的系统运维**
在容器化之后，我们的开发，测试环境都是高度一致的。
**更高效的计算资源利用：**
Docker是内核级别的虚拟化，可以再一个物理机上可以运行很多的容器实例！服务器的性能可以被压榨到极致。

## Docker安装

### Docker的基本组成

![img](https://gitee.com/bymori/pic-go-core/raw/master/img/20210307170356136.png)

**镜像(image):**
docker镜像就好比是一 个模板，可以通过这个模板来创建容器服务，tomcat镜像 ===> run ==> tomcat01容器（提供服务器），通过这个镜像可以创建多个容器（最终服务运行或者项目运行就是在容器中的）
**容器(container):**
Docker利用容器技术，独立运行一 个或者一个组应用，通过镜像来创建的。
启动，停止，删除，基本命令！
目前就可以把这个容器理解为就是一个简易的linux系统
**仓库(repository):**
仓库就是存放镜像的地方！
仓库分为公有仓库和私有仓库！
Docker Hub（默认是国外的）
阿里云...华为..都有容器服务器(配置镜像加速！)

### 安装Docker

```shell
# 系统内核是 3.10 以上
[root@VM-20-17-centos /]# uname -r
3.10.0-1160.31.1.el7.x86_64

```

```shell
# 系统版本
[root@VM-20-17-centos /]# cat etc/os-release

NAME="CentOS Linux"
VERSION="7 (Core)"
ID="centos"
ID_LIKE="rhel fedora"
VERSION_ID="7"
PRETTY_NAME="CentOS Linux 7 (Core)"
ANSI_COLOR="0;31"
CPE_NAME="cpe:/o:centos:centos:7"
HOME_URL="https://www.centos.org/"
BUG_REPORT_URL="https://bugs.centos.org/"

CENTOS_MANTISBT_PROJECT="CentOS-7"
CENTOS_MANTISBT_PROJECT_VERSION="7"
REDHAT_SUPPORT_PRODUCT="centos"
REDHAT_SUPPORT_PRODUCT_VERSION="7"

```

#### 安装

```shell
# 1. 卸载旧的版本
yum remove docker \
            docker-client \
            docker-client-latest \
            docker-common \
            docker-latest \
            docker-latest-logrotate \
            docker-logrotate \
            docker-engine

# 2. 需要的 安装包
yum install -y yum-utils

# 3. 设置镜像的仓库
yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo # 默认是国外地址 速度较慢

yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo # 国内阿里云 镜像地址

# 更新yum软件包索引
yum makecache fast

# 4. 安装 docker 
yum install docker-ce docker-ce-cli containerd.io

# 查看 版本
docker version

# 5. 启动
systemctl start docker

# 6. 运行 hello-world
docker run hello-world

# 查看 docker 镜像
docker images
```

### 镜像加速器

<https://l6zzdqxw.mirror.aliyuncs.com>

```shell
# 配置镜像加速器
sudo mkdir -p /etc/docker

sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://l6zzdqxw.mirror.aliyuncs.com"]
}
EOF

sudo systemctl daemon-reload

sudo systemctl restart docker
```

## Docker的常用命令

### 帮助命令

```shell
docker port      # 查看映射端口对应的容器内部源端口
docker pause     # 暂停容器
docker ps        # 猎户容器列表
docker pull      # 从docker镜像源服务器拉取指定镜像或者库镜像
docker push      # 推送指定镜像或者库镜像至docker源服务器
docker restart   # 重启运行的容器
docker rm        # 移除一个或多个容器
docker rmi       # 移除一个或多个镜像 （无容器使用该镜像才可删除，否则需要删除相关容器才可继续或 -f 强制删除）
docker run       # 创建一个新的容器并运行一个命令
docker save      # 保存一个镜像为一个 tar 包【对应 load】
docker search    # 在 docker hub 中搜索镜像
docker start     # 启动容器
docker stop      # 停止容器
docker tag       # 给源中镜像打标签
docker top       # 查看容器中运行的进程信息
docker unpause   # 取消暂停容器
docker version   # 查看 docker版本号
docker info   # 显示 docker 系统信息 包括镜像和容器的数量
docker wait      # 截取容器停止时的退出状态值
docker 命令 --help # 万能命令
```

### 镜像命令

**docker images** 查看所有本地主机上的镜像

```shell
[root@VM-20-17-centos /]# docker images
REPOSITORY    TAG       IMAGE ID       CREATED       SIZE
hello-world   latest    feb5d9fea6a5   8 weeks ago   13.3kB

# 解释
REPOSITORY  镜像的 仓库源
TAG         镜像的 标签
IMAGE ID    镜像的 ID
CREATED     镜像的 创建时间
SIZE        镜像的 大小

# 可选项:
  -a, --all             # 列出所有镜像
  -q, --quiet           # 只显示镜像的id
```

**docker search** 搜索镜像

```shell
[root@VM-20-17-centos /]# docker search mysql
NAME                              DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
mysql                             MySQL is a widely used, open-source relation…   11707     [OK]       
mariadb                           MariaDB Server is a high performing open sou…   4458      [OK]    

# 可选项:
  -f, --filter filter     根据提供的条件输出过滤
      --format string   使用GO模板的精美打印搜索
      --limit int       最大搜索结果数(默认值为25)
      --no-trunc        不截断输出

[root@VM-20-17-centos /] # docker search mysql --filter=STARS=3000
NAME      DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
mysql     MySQL is a widely used, open-source relation…   11707     [OK]       
mariadb   MariaDB Server is a high performing open sou…   4458      [OK]  
```

**docker pull** 下载镜像

```shell
# 下载镜像 docker pull 镜像名[:tag]

[root@VM-20-17-centos /]# docker pull mysql
Using default tag: latest # 如果不写 tag 则默认下载最新版本 latest
latest: Pulling from library/mysql
a10c77af2613: Pull complete # 分层下载 docker images 的核心  联合文件系统
b76a7eb51ffd: Pull complete 
258223f927e4: Pull complete 
2d2c75386df9: Pull complete 
63e92e4046c9: Pull complete 
f5845c731544: Pull complete 
bd0401123a9b: Pull complete 
3ef07ec35f1a: Pull complete 
c93a31315089: Pull complete 
3349ed800d44: Pull complete 
6d01857ca4c1: Pull complete 
4cc13890eda8: Pull complete 
Digest: sha256:aeecae58035f3868bf4f00e5fc623630d8b438db9d05f4d8c6538deb14d4c31b # 签名
Status: Downloaded newer image for mysql:latest
docker.io/library/mysql:latest # 真实地址

docker pull mysql
# 等价于
docker pull docker.io/library/mysql:latest

# 指定版本下载
docker pull mysql:5.7

[root@VM-20-17-centos /]# docker pull mysql:5.7
5.7: Pulling from library/mysql
a10c77af2613: Already exists 
b76a7eb51ffd: Already exists 
258223f927e4: Already exists 
2d2c75386df9: Already exists 
63e92e4046c9: Already exists 
f5845c731544: Already exists 
bd0401123a9b: Already exists 
2724b2da64fd: Pull complete 
d10a7e9e325c: Pull complete 
1c5fd9c3683d: Pull complete 
2e35f83a12e9: Pull complete 
Digest: sha256:7a3a7b7a29e6fbff433c339fc52245435fa2c308586481f2f92ab1df239d6a29
Status: Downloaded newer image for mysql:5.7
docker.io/library/mysql:5.7


# 可选项:
  -a, --all-tags                下载存储库中所有已标记的图像
      --disable-content-trust   跳过映像验证(默认值为true)
      --platform string         如果服务器支持多平台，则设置平台
  -q, --quiet                   禁止详细输出

```

**docker rml** 删除镜像

```shell
# -f Force 表示强制删除
[root@VM-20-17-centos /]# docker rmi -f 容器id # 删除指定的容器
[root@VM-20-17-centos /]# docker rmi -f 容器id 容器id 容器id # 删除多个容器
[root@VM-20-17-centos /]# docker rmi -f $(docker images -aq) # 删除全部的容器
```

### 容器命令
