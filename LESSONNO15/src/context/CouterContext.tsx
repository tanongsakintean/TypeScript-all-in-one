import {
  useCallback,
  ChangeEvent,
  createContext,
  useReducer,
  ReactElement,
  useContext,
} from "react";

type StateType = {
  count: number;
  text: string;
};

export const initState: StateType = { count: 0, text: "" }; // create variable for global

const enum REDUCER_ACTION_TYPE { // create type for set case
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  // type of action
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: StateType, action: ReducerAction): StateType => {
  // create for management state global
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

const useCounterContext = (initState: StateType) => {
  // create custom hook
  const [state, dispatch] = useReducer(reducer, initState);
  //call state and dispatch
  // state => variable global
  // dispatch => param from type ReducerAction

  const increment = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),
    []
  );

  const decrement = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }),
    []
  );

  const handleTextInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch({
        type: REDUCER_ACTION_TYPE.NEW_INPUT,
        payload: e.target.value,
      }),
    []
  );

  return { state, increment, decrement, handleTextInput }; // return custom hook
};

type useCounterContextType = ReturnType<typeof useCounterContext>; // create new type from typeof useCounterContext

const initContextState: useCounterContextType = {
  // create state object for global
  state: initState,
  increment: () => {},
  decrement: () => {},
  handleTextInput: (): void => {},
};

export const CounterContext =
  createContext<useCounterContextType>(initContextState); // create context for push to global

type ChildrenType = {
  // this type for return element with react
  children?: ReactElement | undefined;
};

export const CounterProvider = ({
  children,
  ...initState
}: StateType & ChildrenType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      // create tag double for wrap for global variable
      {/* // useCounterContext => push initState from app.tsx for use in reducer  */}
      {children}
    </CounterContext.Provider>
  );
};

type UseCounterHookType = {
  /// create type for custom hook
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounter = (): UseCounterHookType => {
  //create custom hook
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext); // destructuring state global context
  return { count, increment, decrement };
};

type UseCounterTextHookType = {
  /// create type for custom hook
  text: string;
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useCounterText = (): UseCounterTextHookType => {
  const {
    state: { text },
    handleTextInput,
  } = useContext(CounterContext); // destructuring state global context
  return { text, handleTextInput };
};
