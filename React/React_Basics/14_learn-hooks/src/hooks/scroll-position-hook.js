/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 20:47:53
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-12 20:50:27
 */
import { useState, useEffect } from 'react';

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(parseInt(window.scrollY));
    };
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.addEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
