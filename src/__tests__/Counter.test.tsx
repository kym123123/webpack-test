import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import Counter from '@components/Counter';

describe('<Counter />', () => {
  it('matches snapshot', () => {
    // const utils = render(<Counter />);
    // expect(utils.container).toMatchSnapshot();
  });

  it('has a number and two buttons', () => {
    const utils = render(<Counter />);

    utils.getByText('0'); // 숫자
    utils.getByText('+1'); // 증가버튼
    utils.getByText('-1'); // 감소버튼
  });

  it('increases', () => {
    const utils = render(<Counter />);
    const number = utils.getByText('0');
    const plusButton = utils.getByText('+1');

    // click twice
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);

    expect(number).toHaveTextContent('2'); // jest-dom 확장 matcher
    expect(number.textContent).toBe('2'); // textcontent 직접 비교
  });

  it('decreases', () => {
    const utils = render(<Counter />);
    const number = utils.getByText('0');
    const minusButton = utils.getByText('-1');

    fireEvent.click(minusButton);
    fireEvent.click(minusButton);
    expect(number).toHaveTextContent('-2');
  });
});
// fireEvent.[이벤트이름](DOM, event object);
