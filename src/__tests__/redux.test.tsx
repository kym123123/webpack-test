import reducer, {
  decrement,
  increment,
  incrementByAmount,
} from '@modules/counter';
import Counter from '@components/Counter';
import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@/test-utils';

describe('redux test', () => {
  it('should increase the counter value by one', () => {
    expect(reducer({ value: 0 }, increment())).toEqual({
      value: 1,
    });
  });

  it('should decrease the counter value by one', () => {
    expect(reducer({ value: 0 }, decrement())).toEqual({
      value: -1,
    });
  });

  it('should increase the counter value by amount', () => {
    expect(reducer({ value: 0 }, incrementByAmount(2))).toEqual({
      value: 2,
    });
  });
});

describe('dispatching test', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('should increase value', () => {
    const plusButton = screen.getByText('+');
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);

    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('should decrease value', () => {
    const minusButton = screen.getByText('-');
    fireEvent.click(minusButton);
    fireEvent.click(minusButton);

    expect(screen.getByText('-2')).toBeInTheDocument();
  });
});
