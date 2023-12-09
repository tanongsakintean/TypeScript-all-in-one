import { ChangeEvent, ReactNode, useReducer } from "react";

const initState = { count: 0, text: "" };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" }; // action.payload ?? "" => if action.payload == null || action.payload == undefined => return ""
    default:
      throw new Error("");
  }
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  //   const [count, setCount] = useState<number>(1);
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = (): void => {
    dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  };

  const decrement = (): void => {
    dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  };

  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value });
  };

  return (
    <div>
      <h1>{children(state.count)}</h1>
      {/* children(count) =>  call function in App.tsx */}
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <input type="text" name="" onChange={handleTextInput} id="" />
        <h2>{state.text}</h2>
      </div>
    </div>
  );
};

export default Counter;
