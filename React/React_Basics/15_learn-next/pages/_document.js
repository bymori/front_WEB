/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-27 13:26:42
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-27 15:18:12
 */

import Document, { Html, Head, Main, NextScript } from 'next/document';

// https://nextjs.org/docs/advanced-features/custom-document
// Custom Document

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="zh">
        <Head />
        <body>
          <h2>嘿嘿嘿</h2>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
