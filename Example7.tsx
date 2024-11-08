import React, { useState, useCallback } from 'react';

function Counter({ onClick }) {
  console.log('Counter rendered');
  return <button onClick={onClick}>Increment</button>;
}

const MemoizedCounter = React.memo(Counter);

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <MemoizedCounter onClick={increment} />
    </div>
  );
}

export default App;

// Each time the button is clicked, the console will show Counter rendered. Although Counter is memoized, it still re-renders because increment is recreated on every render due to [count] in the dependency array. Removing count from the dependency array would prevent this, though it could introduce other issues with stale state in useCallback.
