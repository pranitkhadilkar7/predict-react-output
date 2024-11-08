import React from 'react';

export function Example3() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let timeout = setTimeout(() => {
      console.log(count);
    }, 3000);
    // return () => clearTimeout(timeout);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}
