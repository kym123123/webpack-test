import React, { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '@modules/index';
import { decrement, increment } from '@modules/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.counter);

  const handleValue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.target.dataset.name === 'increase') dispatch(increment());
    else dispatch(decrement());
  };

  return (
    <>
      <h1>Counter</h1>
      <CounterContainer>
        <button onClick={handleValue} data-name="increase">
          +
        </button>
        <div>{value}</div>
        <button onClick={handleValue} data-name="decrease">
          -
        </button>
      </CounterContainer>
    </>
  );
};

const CounterContainer = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  background-color: aqua;
`;

export default Counter;
