import React from 'react';
import { useState } from 'react';

const CounterDos = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(Date()); // con fecha persistente
  const aumentar = () => {
    setCount(count + 1);
    setDate(Date);
  };

  return (
    <>
      <p>{count}</p>
      <p>{date}</p>
      <button onClick={aumentar}>contadorDos</button>
    </>
  );
};

export default CounterDos;
