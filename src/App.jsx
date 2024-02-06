import React from 'react';
import AppRouter from './components/routes/routes';
import Provider from './context/Provider';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Provider>
        <AppRouter />
      </Provider>
    </Router>
  );
}

export default App;
