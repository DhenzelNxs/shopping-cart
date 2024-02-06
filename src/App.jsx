import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Provider from './context/Provider';
import Home from './screens/Home/Home';
import Order from './screens/Order/Order';
import QrCode from './screens/QrCode/QrCode';

function App() {

  return (
    <Router>
      <Provider>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/order" Component={Order}/>
          <Route path="/qrcode" Component={QrCode} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
