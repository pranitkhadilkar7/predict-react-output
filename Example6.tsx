import React, { createContext, useContext, useState, memo } from 'react';

const CountContext = createContext(null);

const Display = () => {
  const count = useContext(CountContext);
  console.log('Display rendered');
  return <p>Count: {count}</p>;
};

const DisplayMemo = memo(Display);

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <DisplayMemo />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </CountContext.Provider>
  );
}

export default App;

// Despite Display being wrapped in memo, it will still render every time the count value changes because useContext always re-renders when the context value changes. So, every time the button is clicked, Display rendered will log to the console.
