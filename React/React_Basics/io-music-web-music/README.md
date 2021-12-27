# Getting Started with Create React App

## todo

### mv视频 获取
> mvid及视频链接获取流程

1. 获取歌曲数据时 查看是否返回有**mv**字段
   1. 例如 **获取歌曲详情** `/song/detail?ids=468517654` 返回 `songs[0].mv` `"mv": 5521812,` 如果没有则说明当歌曲 无mv视频 可以获取视频 后续讲解方式
   2. 歌曲相关视频
      1. 可以调用此接口获取歌曲相关视频 (区别于 MV)， 有些歌曲没有 MV 但是有用户上传的与此歌曲相关的 Mlog。 此功能仅在 网易云音乐 APP 上存在。
      2. 接口地址 : `/mlog/music/rcmd` 
         1. 必选参数 : `songid` : 歌曲 ID
         2. 可选参数 :
            1. `mvid` : 如果定义，此 mvid 对应的 MV 将会作为第一个返回。 
            2. `limit` : 取出的 Mlog 数量, 不包含第一个 mvid
      3. 调用例子 : `/music/rcmd?songid=1900998233`
         1. 这里主要获取到 `data.feeds[number].id` mlog id数据
      4. 获取 `mlog `播放地址
         1. 调用此接口 , 传入 mlog id, 可获取 mlog 播放地址
         2. **必选参数** : `id` : `mlog id`  上一步获取到的id数据
         3. **可选参数** : `res`: 分辨率 , 默认为 1080
         4. **接口地址** : `/mlog/url`
         5. **调用例子** : `/mlog/url?id=a1ZRq5DgZfQ6105`
      5. 获取到 `data.resource.content.video.urlInfo.url` 为 mp4 视频播放地址
      6. 至此 完成!
2. 获取 `mv` 数据  调用:`/mv/detail?mvid=5521812` 这里的`mvid` 为上面获取 `mv字段` 
   1. 调用此接口 , 传入 `mvid` ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间 , mv 视频地址等数据 , 其中 mv 视频 网易做了防盗链处理 , 可能不能直接播放 , 需要播放的话需要调用 ' `mv 地址`' 接口
   2. `data.brs[0~3].br` 为视频分辨率
3. mv 地址 调用此接口 , 传入 `mv id`,可获取 `mv 播放地址`
   1. 必选参数 : `id`: mv id
   2. 可选参数 : `r`: 分辨率,默认 1080,可从 `/mv/detail` 接口获取分辨率列表
   3. 调用例子 : `/mv/url?id=5521812` `/mv/url?id=5521812&r=1080`
   4. 请求成功后 `data.url` 则为mv播放地址
4. 至此 完成   后续需要视频播放相关操作
