/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 16:35:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 16:40:14
 */

// hook: useState
// const [counter, setCounter] = {counter: , setCounter:}

function useState(state: any) {
  let currentState = state;
  const changeState = (newState: any) => {
    currentState = newState;
  };

  const tuple: [any, (newState: any) => void] = [currentState, changeState];
  return tuple;
}

const [counter, setCounter] = useState(10);
setCounter(1000);

const [title, setTitle] = useState('abc');

export {};
