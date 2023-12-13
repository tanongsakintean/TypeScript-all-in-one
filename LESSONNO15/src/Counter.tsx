import { ReactNode } from "react";
import { useCounter } from "./context/CouterContext";
import { useCounterText } from "./context/CouterContext";

type ChildrenType = {
  //create type for children function return element
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  //   const [count, setCount] = useState<number>(1);
  const { count, increment, decrement } = useCounter(); // call function from custom hook
  const { text, handleTextInput } = useCounterText();

  return (
    <div>
      <h1>{children(count)}</h1>
      {/* children(count) =>  call function in App.tsx */}
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <input type="text" name="" onChange={handleTextInput} id="" />
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default Counter;
