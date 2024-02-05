import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Provider from './context/Provider';
import Home from './screens/Home/Home';
import Order from './screens/Order/Order';

function App() {

  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/order" Component={Order}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
