import React, { useReducer } from 'react';
import counterReducer from './countReducer';

function UseReducerHook() {
  const [count, dispatchCount] = useReducer(counterReducer, 0);

  const onIncrease = () => {
    dispatchCount({ type: 'INCREASE' });
  };

  const onDecrease = () => {
    dispatchCount({ type: 'DECREASE' });
  };
  return (
    <div>
      <h1>useReducer Hook 개발 샘플</h1>
      <h3>카운터: {count}</h3>
      <button onClick={onIncrease}>증가</button>
      <button onClick={onDecrease}>감소</button>
      <button
        onClick={() => {
          dispatchCount({ type: 'INIT' });
        }}
      >
        초기화
      </button>
    </div>
  );
}

export default UseReducerHook;
