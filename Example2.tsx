import React, { useCallback } from 'react';

type Props = {
  onClick: () => void;
};

const ChildComponent = React.memo(({ onClick }: Props) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me</button>;
});

export function ParentComponent() {
  const [count, setCount] = React.useState(0);
  // const handleClick = () => setCount(count + 1);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
