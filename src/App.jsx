import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyComponent from './component/MyComponent ';
import Home from './component/Home';
import Shop from './component/Shop';
import Product from './component/Product';
import Blog from './component/Blog';
import Pages from './component/Pages';
import Elements from './component/Elements';
import BrowseCategory from './component/BrowseCategory';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/home/:item" element={<Home />} />
        <Route path="/shop/:item" element={<Shop />} />
        <Route path="/product/:item" element={<Product />} />
        <Route path="/pages/:item" element={<Pages />} />
        <Route path="/blog/:item" element={<Blog />} />
        <Route path="/element/:item" element={<Elements/>} />
        <Route path="/browse/:item" element={<BrowseCategory/>} />

      </Routes>
    </Router>
  );
};

export default App;
