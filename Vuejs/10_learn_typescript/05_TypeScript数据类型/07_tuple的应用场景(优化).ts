/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 16:42:16
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 16:48:05
 */
// hook: useState
// const [counter, setCounter] = {counter: , setCounter:}

function useState<T>(state: T) {
  let currentState = state;
  const changeState = (newState: T) => {
    currentState = newState;
  };

  const info: [string, number] = ['abc', 18];

  const tuple: [T, (newState: T) => void] = [currentState, changeState];
  return tuple;
}

const [counter, setCounter] = useState(10);
setCounter(1000);

const [title, setTitle] = useState('abc');

const [flag, setFlag] = useState(true);

// type MyFunction = () => void
// const foo: MyFunction = () => {}

export {};
