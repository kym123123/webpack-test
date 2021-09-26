import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@modules/index';

import Counter from '@components/Counter';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
