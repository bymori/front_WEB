/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-25 22:29:01
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-25 23:04:37
 */
/**
 * [00:00.000] 作词 : 薛之谦
 * [00:00.403] 作曲 : 郭顶
 * [00:00.806] 制作人：郭顶
 * [00:01.209]
 * [00:01.612] 编曲/钢琴/贝斯：陈迪
 * [00:02.015]
 * [00:02.418] 鼓：王斌
 */

// 解析歌词
// [02:22.46]别再进化 别让动物世界太假
// const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/;

export function parseLyric(lyricString) {
  const lineStrings = lyricString.split('\n'); // 获取每一行的歌词 返回一个数组

  const lyrics = [];
  for (let line of lineStrings) {
    if (line) {
      const result = parseExp.exec(line);
      const minute = result[1] * 60 * 1000;
      const second = result[2] * 1000;
      const millisecond =
        result[3].length === 3 ? result[3] * 1 : result[3] * 10;

      const time = minute + second + millisecond;

      //   const content = line.replace(parseExp, '').trim();
      const content = result[4].trim();

      const lineObj = { time, content };
      lyrics.push(lineObj);
    }
  }
  return lyrics;
}
