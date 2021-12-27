/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-27 16:22:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-27 16:22:34
 */
import React, { memo } from 'react';

import { useRouter } from 'next/router';

export default memo(function Recommend() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <h2>Recommend: {router.query.id}</h2>
    </div>
  );
});
