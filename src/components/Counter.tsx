import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '@modules/index';
import { decrement, increment } from '@modules/counter';

import '@/index.css';

const Counter = () => {
  // const dispatch = useDispatch();
  // const { value } = useSelector((state: RootState) => state.counter);

  return (
    <>
      <h1>Counter</h1>
      <CounterContainer>
        {/* <button onClick={() => dispatch(increment())} data-name="increase"> */}
        {/* + */}
        {/* </button> */}
        <div className=".zero">0</div>
        {/* <div>{value}</div> */}
        {/* <button onClick={() => dispatch(decrement())} data-name="decrease"> */}
        {/* - */}
        {/* </button> */}
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
