import React from 'react';

export function ExampleComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      // setCount((count) => count + 1);
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  console.log('count', count);

  return <div>Count: {count}</div>;
}
