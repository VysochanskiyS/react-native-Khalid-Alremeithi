import React from 'react';
import {Router} from './src/Navigation';
import {ReactQueryProvider} from './src/ReactQuery';

const App = () => {
  return (
    <ReactQueryProvider>
      <Router />
    </ReactQueryProvider>
  );
};

export default App;
