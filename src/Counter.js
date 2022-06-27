import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const aumentar = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>{count}</p>
      <p>{Date()}</p>
      <button onClick={aumentar}>contador</button>
    </>
  );
};

export default Counter;
