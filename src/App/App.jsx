import React, {Suspense} from 'react';

import './App.scss';
import Home from '../views/root/root';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <Home />
      </div>
    </Suspense>
  );
};

export default App;
