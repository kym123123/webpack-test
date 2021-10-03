import { render, screen } from '@testing-library/react';
import { fireEvent, waitForElementToBeRemoved } from '@testing-library/dom';
import DelayedToggle from '@/components/DelayedToggle';

describe('<DelayedToggle />', () => {
  it('reveals text when toggle is ON', async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText('토글');

    fireEvent.click(toggleButton);
    await (() => screen.getByText('야호')); // callback 안의 함수가 에러를 발생시키지 않을때 까지 대기
  });

  // waitFor 함수는 특정 엘리먼트가 나타나거나 사라지거나 바뀔때 까지 대기, promise가 끝날때 우리가 element를 resolve함
  it('toggles text ON/OFF', async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText('토글');

    fireEvent.click(toggleButton);
    const text = await screen.findByText('ON');

    expect(text).toHaveTextContent('ON');
  });

  it('removes text when toggle is OFF', async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText('토글');

    fireEvent.click(toggleButton);
    await screen.findByText('야호');

    // await waitFor(() => {
    //   screen.getByText('야호');
    // });

    fireEvent.click(toggleButton);
    await waitForElementToBeRemoved(() => screen.getByText('야호'));
  });
});
