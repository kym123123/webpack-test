import React from 'react';
import { render } from '@testing-library/react';
import Profile from '@/Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username="liam" name="min" />); // render가 반환한 값 => DOM선택 가능한 쿼리, container 가 포함 되어있다.
    expect(utils.container).toMatchSnapshot(); // container는 해당 컴포넌트의 최상위 DOM
  });

  it('shows the props correctly', () => {
    const utils = render(<Profile username="liam" name="min" />);
    utils.getByText('liam'); // liam 이라는 text를 가진 엘리먼트 확인
  });
});
