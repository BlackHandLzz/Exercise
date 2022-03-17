import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Detail from './views/Detail';
import Cart from './views/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail/:id/:cid/:vid/:count" element={<Detail />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
