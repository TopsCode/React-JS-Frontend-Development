import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from '../counter/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{margin:"20px"}}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment  +  </button>
      <button onClick={() => dispatch(decrement())}>decrement -</button>
    </div>
  );
}

export default Counter;
