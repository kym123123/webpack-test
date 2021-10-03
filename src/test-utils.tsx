import { FC, ReactElement } from 'react';
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import counter from '@/modules/counter';

type RenderType = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> // wrapper는 제외한 객체를 받는다
) => RenderResult; // render 메서드의 return 타입

const render: RenderType = (ui, options) => {
  const Wrapper: FC = ({ children }) => (
    <Provider store={configureStore({ reducer: { counter } })}>
      {children}
    </Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
export { render };
