import Counter from "./Counter";
import { CounterProvider } from "./context/CouterContext";
import { initState } from "./context/CouterContext";

function App() {
  return (
    <>
      {/* count={initState.count} text={initState.text}  => send to param initState */}
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter>
          {(num: number) => <>Current Count: {num}</>}
          {/* create function for return value from state global */}
        </Counter>
      </CounterProvider>
    </>
  );
}

export default App;
