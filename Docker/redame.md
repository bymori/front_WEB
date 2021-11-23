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

**说明:** 有了镜像测可以创建容器 linux, 下载一个centos镜像用来测试学习

```shell
docker pull centos
```

**新建容器并启动**

```shell
docker run [可选参数] image

# 参数说明
--name="Name"  容器名字tomcat01 tomcat02，用来区分容器
-d             后台方式运行
-it            使用交互方式运行，进入容器查看内容
-p             指定容器的端口 -p 8080:8080
  -p   ip:主机端口：容器端口
  -p   主机端口：容器端口（常用）
  -p   容器端口
-P             随机指定端口

# 测试 启动并进入容器
[root@VM-20-17-centos /]# docker run -it centos /bin/bash
[root@6a3680576d27 /]# ls # 查看容器内的 centos 这里是基础版本 部分命令无法使用
bin  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var

# 从容器中退回主机
[root@6a3680576d27 /]# exit
exit
[root@VM-20-17-centos /]# ls
bin   data  etc   lib    lost+found  mnt  proc  run   srv  tmp  var
boot  dev   home  lib64  media       opt  root  sbin  sys  usr  www
```

**列出所有运行的容器**

```shell
# docker ps 命令
     #列出当前正在运行的容器
-a   #列出当前正在运行的容器 + 带出历史运行过的容器
-n=? #显示最近创建的容器
-q   #只显示容器的编号

[root@VM-20-17-centos /]# docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

[root@VM-20-17-centos /]# docker ps -a
CONTAINER ID   IMAGE         COMMAND       CREATED          STATUS                     PORTS     NAMES
6a3680576d27   centos        "/bin/bash"   11 minutes ago   Exited (0) 5 minutes ago             mystifying_antonelli
891d7dbd1bf0   hello-world   "/hello"      22 hours ago     Exited (0) 22 hours ago              affectionate_mclaren
ded5fe940099   hello-world   "/hello"      22 hours ago     Exited (0) 22 hours ago              musing_goodall
```

**退出容器**

```shell
exit         # 容器停止并退出

Ctrl + P + Q # 容器退出不停止

[root@VM-20-17-centos /]# docker run -it centos /bin/bash
[root@032b3273f1a1 /]# [root@VM-20-17-centos /]# 

[root@032b3273f1a1 /]# [root@VM-20-17-centos /]# docker ps
CONTAINER ID   IMAGE     COMMAND       CREATED          STATUS          PORTS     NAMES
032b3273f1a1   centos    "/bin/bash"   53 seconds ago   Up 52 seconds             eager_aryabhata

```

**删除容器**

```shell
docker rm 容器id                   # 删除指定的容器, 不能删除正在删除的容器, 如果要强制删除 rm -f
docker rm $(docker ps -aq)        # 删除所有的容器
docker ps -a -q|xargs docker rm   # 删除所有的容器
```

**启动和停止容器的操作**

```shell
docker start 容器id    # 启动容器
docker restart 容器id  # 重启容器
docker stop 容器id     # 停止当前正在运行的容器
docker kill 容器id     # 强制停止当前容器
```

### 常用其他命令

**后台启动容器**

```shell
# docker run -d 镜像名
[root@VM-20-17-centos /]# docker run -d centos
dfa396e4fe636a13d15b133cf11bffcbbaa209aed9ef191712a30b2f4935b0c1
[root@VM-20-17-centos /]# 

## 问题 docker ps 发现 centos 停止了
# 常见的坑，docker容器使用后台运行，就必须要有要一个前台进程，docker发现没有应用，就会自动停止
# nginx，容器启动后，发现自己没有提供服务，就会立刻停止，就是没有程序了
```

**查看日志**

```shell
docker logs -f -t --tail # 容器 没有日志

# 编写一段 shell 脚本
[root@VM-20-17-centos /]# docker run -d centos /bin/sh -C "while true;do echo momo; sleep 1; done"

[root@VM-20-17-centos /]# docker ps
CONTAINER ID   IMAGE
032b3273f1a1   centos


# 显示日志
-tf              # 显示日志
--tail number    # 要显示日志的条数
[root@VM-20-17-centos /]# docker logs -tf --tail 10 032b3273f1a1
```

**查看容器进程信息**

```shell
# 命令 docker top 容器id
[root@VM-20-17-centos /]# docker top 032b3273f1a1
UID     PID     PPPID     PC     PSTIME     PTTY     PTIME     PCMD
root    6957    6938      0      21:34      pts/0    00:00:00  /bin/bash
```

**查看镜像的元数据**

```shell
# 命令 docker inspect 容器id

[root@VM-20-17-centos /]# docker inspect 032b3273f1a1
[
    {
        "Id": "032b3273f1a134d8e69c1529f5797a471c41dd667fd2114d8db4db5b4e295f90",
        "Created": "2021-11-20T13:34:26.559417024Z",
        "Path": "/bin/bash",
        "Args": [],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 6957,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2021-11-20T13:34:26.791069264Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:5d0da3dc976460b72c77d94c8a1ad043720b0416bfc16c52c45d4847e53fadb6",
        "ResolvConfPath": "/var/lib/docker/containers/032b3273f1a134d8e69c1529f5797a471c41dd667fd2114d8db4db5b4e295f90/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/032b3273f1a134d8e69c1529f5797a471c41dd667fd2114d8db4db5b4e295f90/hostname",
        "HostsPath": "/var/lib/docker/containers/032b3273f1a134d8e69c1529f5797a471c41dd667fd2114d8db4db5b4e295f90/hosts",
        "LogPath": "/var/lib/docker/containers/032b3273f1a134d8e69c1529f5797a471c41dd667fd2114d8db4db5b4e295f90/032b3273f1a134d8e69c1529f5797a471c41dd667fd2114d8db4db5b4e295f90-json.log",
        "Name": "/eager_aryabhata",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "default",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "host",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "ConsoleSize": [
                0,
                0
            ],
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "KernelMemory": 0,
            "KernelMemoryTCP": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": false,
            "PidsLimit": null,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/a2c1bc6dcfda2487961d5a920ae9a366b750010ba446371f67817f7acb2701cd-init/diff:/var/lib/docker/overlay2/bbf53e7389eb5f2452bdaa415ef0e9e89d2afa91c72c91427582ab416f115095/diff",
                "MergedDir": "/var/lib/docker/overlay2/a2c1bc6dcfda2487961d5a920ae9a366b750010ba446371f67817f7acb2701cd/merged",
                "UpperDir": "/var/lib/docker/overlay2/a2c1bc6dcfda2487961d5a920ae9a366b750010ba446371f67817f7acb2701cd/diff",
                "WorkDir": "/var/lib/docker/overlay2/a2c1bc6dcfda2487961d5a920ae9a366b750010ba446371f67817f7acb2701cd/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [],
        "Config": {
            "Hostname": "032b3273f1a1",
            "Domainname": "",
            "User": "",
            "AttachStdin": true,
            "AttachStdout": true,
            "AttachStderr": true,
            "Tty": true,
            "OpenStdin": true,
            "StdinOnce": true,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ],
            "Cmd": [
                "/bin/bash"
            ],
            "Image": "centos",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": null,
            "OnBuild": null,
            "Labels": {
                "org.label-schema.build-date": "20210915",
                "org.label-schema.license": "GPLv2",
                "org.label-schema.name": "CentOS Base Image",
                "org.label-schema.schema-version": "1.0",
                "org.label-schema.vendor": "CentOS"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "23c7ee6ec9647fee51d5f0cde1fc6e533a5db07ee96570da5a68ec878179c6cf",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {},
            "SandboxKey": "/var/run/docker/netns/23c7ee6ec964",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "fa5d4c4806d089ecb062257af285441c9bede3ffabdb27d723035e0cf0004ab2",
            "Gateway": "172.17.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.17.0.2",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "02:42:ac:11:00:02",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "25b74323e083a68069647e4e861b8447e6c93f02563f5a4e772ce4de2031bc38",
                    "EndpointID": "fa5d4c4806d089ecb062257af285441c9bede3ffabdb27d723035e0cf0004ab2",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:11:00:02",
                    "DriverOpts": null
                }
            }
        }
    }
]
```

**进入当前正在运行的容器**

```shell
# 容器通常都是使用后台方式运行的, 需要进入容器, 修改一些配置

# 命令
docker exec -it 容器id bashShell

# 测试
[root@VM-20-17-centos /]# docker ps
CONTAINER ID   IMAGE     COMMAND       CREATED             STATUS             PORTS     NAMES
032b3273f1a1   centos    "/bin/bash"   About an hour ago   Up About an hour             eager_aryabhata

[root@VM-20-17-centos /]# docker exec -it 032b3273f1a1 /bin/bash

[root@032b3273f1a1 /]# ls
bin  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var

[root@032b3273f1a1 /]# ps -ef
UID        PID  PPID  C STIME TTY          TIME CMD
root         1     0  0 13:34 pts/0    00:00:00 /bin/bash
root        16     0  0 14:37 pts/1    00:00:00 /bin/bash
root        31    16  0 14:37 pts/1    00:00:00 ps -ef


# 方式二
docker attach 容器id

# 测试 
[root@VM-20-17-centos /]# dicker attach 032b3273f1a1
# 正在执行当前的代码...

# docker exec  # 进入容器后 开启一个新的终端, 可以在里面操作 (常用)
# docker attach # 进入容器正在执行的终端, 不会启动新的进程!!!
```

**容器内拷贝文件到主机上**

```shell
docker cp 容器id:容器内路径 目的地主机路径
```

### 小结

```shell
attach    Attach to a running container                                    #当前shell下attach连接指定运行镜像
build     Build an image from a Dockerfile                                 #通过Dockerfile定制镜像
commit    Create a new image from a containers changes                     #提交当前容器为新的镜像
cp        Copy files/folders from a container to a HOSTDIR or to STDOUT    #从容器中拷贝指定文件或者目录到宿主机中
create    Create a new container                                           #创建一个新的容器，同run 但不启动容器
diff      Inspect changes on a containers filesystem                       #查看docker容器变化
events    Get real time events from the server                             #从docker服务获取容器实时事件
exec      Run a command in a running container                             #在已存在的容器上运行命令
export    Export a containers filesystem as a tar archive                  #导出容器的内容流作为一个tar归档文件(对应import)
history   Show the history of an image                                     #展示一个镜像形成历史
images    List images                                                      #列出系统当前镜像
import    Import the contents from a tarball to create a filesystem image  #从tar包中的内容创建一个新的文件系统映像(对应export)
info      Display system-wide information                                  #显示系统相关信息
inspect   Return low-level information on a container or image             #查看容器详细信息
kill      Kill a running container                                         #kill指定docker容器
load      Load an image from a tar archive or STDIN                        #从一个tar包中加载一个镜像(对应save)
login     Register or log in to a Docker registry                          #注册或者登陆一个docker源服务器
logout    Log out from a Docker registry                                   #从当前Docker registry退出
logs      Fetch the logs of a container                                    #输出当前容器日志信息
pause     Pause all processes within a container                           #暂停容器
port      List port mappings or a specific mapping for the CONTAINER       #查看映射端口对应的容器内部源端口
ps        List containers                                                  #列出容器列表
pull      Pull an image or a repository from a registry                    #从docker镜像源服务器拉取指定镜像或者库镜像
push      Push an image or a repository to a registry                      #推送指定镜像或者库镜像至docker源服务器
rename    Rename a container                                               #重命名容器
restart   Restart a running container                                      #重启运行的容器
rm        Remove one or more containers                                    #移除一个或者多个容器
rmi       Remove one or more images                                        #移除一个或多个镜像(无容器使用该镜像才可以删除，否则需要删除相关容器才可以继续或者-f强制删除)
run       Run a command in a new container                                 #创建一个新的容器并运行一个命令
save      Save an image(s) to a tar archive                                #保存一个镜像为一个tar包(对应load)
search    Search the Docker Hub for images                                 #在dockerHub中搜索镜像
start     Start one or more stopped containers                             #启动容器
stats     Display a live stream of container(s) resource usage statistics  #统计容器使用资源
stop      Stop a running container                                         #停止容器
tag       Tag an image into a repository                                   #给源中镜像打标签
top       Display the running processes of a container                     #查看容器中运行的进程信息
unpause   Unpause all processes within a container                         #取消暂停容器
version   Show the Docker version information                              #查看容器版本号
wait      Block until a container stops, then print its exit code          #截取容器停止时的退出状态值
```

### 练习

#### Docker安装Nginx

1. 搜索镜像 search 建议去[docker搜索](https://hub.docker.com/), 可以看到帮助文档
2. 下载镜像 pull
3. 运行测试

```shell
[root@VM-20-17-centos /]# docker images
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
nginx         latest    ea335eea17ab   3 days ago     141MB
centos        latest    5d0da3dc9764   2 months ago   231MB

# -d 后台运行
# --name 给容器命名
# -p 宿主机端口, 容器内部端口
[root@VM-20-17-centos /]# docker run -d --name nginx01 -p 3344:80 nginx
8bdda459160982d8c9638ddc82f2112e7b3f5a580c1abc9b817c379a24ae695c
[root@VM-20-17-centos /]# docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                                   NAMES
8bdda4591609   nginx     "/docker-entrypoint.…"   8 seconds ago   Up 7 seconds   0.0.0.0:3344->80/tcp, :::3344->80/tcp   nginx01
[root@VM-20-17-centos /]# curl localhost:3344

# 进入容器
[root@VM-20-17-centos /]# docker exec -it nginx01 /bin/bash
root@8bdda4591609:/# whereis nginx
nginx: /usr/sbin/nginx /usr/lib/nginx /etc/nginx /usr/share/nginx
root@8bdda4591609:/# cd /etc/nginx
root@8bdda4591609:/etc/nginx# ls
conf.d	fastcgi_params	mime.types  modules  nginx.conf  scgi_params  uwsgi_params
```

访问3344端口 即可看到 nginx 即为成功
![3344](https://cdn.jsdelivr.net/gh/bymori/image-PicX@main/img/n7bpiscahf-1637464073949.png)

#### Docker安装 tomcat

官方的使用

```shell
docker run -it --rm tomcat:9.0

# 之前启动都是后台, 停止了容器之后 容器还可以查到  ocker run -it --rm 一般用来测试, 用完即删

# 下载再启动 
docker pull tomcat:9.0

# 启动运行
docker run -d -p 3355:8080 --name tomcat01 tomcat

# 测试访问端口是否正常运行

# 进入容器 
[root@VM-20-17-centos home]# docker exec -it tomcat01 /bin/bash

# 问题
#  1. linux命令少了
#  2. 没有webapps
#     阿里云镜像的原因, 默认是最小的镜像。 所有不必要的都剔除掉, 保证最小可运行的环境

## 解决方法
webapps同级目录下 有一个 webapps.dist文件夹 修改文件夹名字 或拷贝全部文件到 webapps 即可正常运行
```

#### 部署 es + kibana

```shell
# es 暴露的端口非常多！
# es 十分的耗内存
# es 的数据一般需要放置到安全目录！ 挂载

#  --net somenetwork 网络配置
docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e
```

### 可视化面板

- portainer (先用这个)
  
  ```shell
  docker run -d -p 8080:9000 \
  --restart=always -v /var/docker.sock:/var/run/docker.sock --privileged=true portainer/portainer
  ```

- Rancher (CI/CD 再用)

#### 什么是 portainer

Docker 图形化管理界面! 提供后台面板操作

```shell
docker run -d -p 8080:9000 \
--restart=always -v /var/docker.sock:/var/run/docker.sock --privileged=true portainer/portainer
```

访问域名端口进行测试 http://ip:8080/

设置admin用户密码，需要输入两次相同的密码
![portainer？](https://cdn.jsdelivr.net/gh/bymori/image-PicX@main/img/c4hqd0594x-1637498531129.png)

## Docker 镜像

## 容器数据卷

### 安装 MySql

```shell
# 获取镜像 MySql 5.7 版本
[root@VM-20-17-centos home]# docker pull mysql:5.7

# 运行容器， 需要做数据挂载 ！！！ 
#   安装启动 mysql需要配置密码 否则无法启动！！！
# 官方实例
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=你的密码 -d mysql:tag

# 启动mysql
-d 后台运行
-p 端口映射
-v 环境配置
--name 容器名字
[root@VM-20-17-centos home]# docker run -d -p 3310:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v/home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql:5.7

# 启动成功后， 可以再本地使用数据库工具测试一下
```

![mysql](https://cdn.jsdelivr.net/gh/bymori/image-PicX@main/img/is4atnkveo-1637505551966.png)

### 具名和匿名挂载

```shell
## 语法
#  匿名挂载 -v 容器内路径
#  具名挂载 -v 卷名:容器内路径

# 匿名挂载
-v 容器内路径
docker run -d -P --name nginx10 -v /ect/nginx nginx

# 查看所有 volume 的情况
[root@VM-20-17-centos home]# docker volume ls
DRIVER    VOLUME NAME
local     7df2b1f0c109e383a3f41162dd52922b9ed9ff9e7284b4f307e029c226b48629

## 这里发现 这种就是匿名挂载。 再 -v 只写了容器内的路径， 没有写容器外的路径

# 具名挂载
[root@VM-20-17-centos home]# docker run -d -P --name nginx20 -v jum-nginx:/etc/nginx nginx
1af9aabb6013dc07dab368599d15cd1b5d890c97023a5d44f3e56fcfcee533f6

[root@VM-20-17-centos home]# docker volume ls
DRIVER    VOLUME NAME
local     7df2b1f0c109e383a3f41162dd52922b9ed9ff9e7284b4f307e029c226b48629
local     jum-nginx

# 通过 -v 卷名:容器内路径
```

查看一下这个卷

```shell{1,7}
[root@VM-20-17-centos home]# docker volume inspect jum-nginx
[
  {
    "CreatedAt": "2021-11-21T23:09:20+08:00",
    "Driver": "local",
    "Labels": null,
    "Mountpoint": "/var/lib/docker/volumes/jum-nginx/_data",
    "Name": "jum-nginx",
    "Options": null,
    "Scope": "local"
  }
]
```

所有的docker容器内的卷，没有指定目录的情况下都是在`/var/lib/docker/volumes/xxxx/_data`

我们通过具名挂载可以方便的找到我们的一个卷，大多数情况在使用的是`具名挂载`

```shell
# 如何确定是具名挂载还是匿名挂载，或者是指定路径挂载
-v 容器内路径             # 匿名挂载 
-v 卷名:容器内路径         # 具名挂载 
-v /宿主机路径::容器内路径  # 指定路径挂载

## 拓展内容
# 通过 -v 容器内路径: ro rw 改变读写权限
ro readonly  # 只读
rw readwrite # 可读写

# 一旦设置了容器权限， 容器对我们挂载出来的内容就有了限定
docker run -d -P --name nginx20 -v jum-nginx:/etc/nginx:ro nginx
docker run -d -P --name nginx20 -v jum-nginx:/etc/nginx:rw nginx

# ro 只要看到ro 就说明这个路径只能通过宿主机来操作， 容器内部是无法操作的
```

## DockerFile

DockerFile 就是用来构建docker镜像的构建文件 ！ 命令脚本

```shell

```

## Docker 网络

## Docker Compose
