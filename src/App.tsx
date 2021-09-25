import React, { ReactNode } from 'react';
import Test from '@components/Test';
import Compo1 from '@components/Compo1';

const App = (): ReactNode => {
  return (
    <div>
      Hello react
      <p>hello hello</p>
      <p>hello hello</p>
      <Test />
      <Compo1 />
    </div>
  );
};

export default App;
