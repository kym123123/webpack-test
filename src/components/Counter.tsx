import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/modules';
import { decrement, increment } from '@/modules/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.counter);

  return (
    <div>
      {value}
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
};

export default Counter;
