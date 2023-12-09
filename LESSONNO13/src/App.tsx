import {
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from "react";

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 7;

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("mounting");
    console.log("users:", users);

    return () => console.log("unmounting");
  }, [users]);

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      // console.log(inputRef?.current?.value);

      setCount((prev) => prev + 1);
    },
    [] // => useCallback use for memorize function this [] is function cache in memory. it can't rerender again
    // but [users] => it rerender agin on users variable have change
  );

  const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => addTwo()}>Add</button>
      <h2>{result}</h2>
      <input type="text" ref={inputRef} name="" id="" />
    </>
  );
}

export default App;
