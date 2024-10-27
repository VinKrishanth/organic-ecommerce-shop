import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, Shop, Blog, Pages, About, Contact } from '../Pages';
import { Fruit, Vegetables, Fish, Meat, Drink, IceCream, Bread, Butter, Cooking } from '../Pages/Categories';

function Layouts() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organic-ecommerce-shop/shop" element={<Shop />} />
        <Route path="/organic-ecommerce-shop/blog" element={<Blog />} />
        <Route path="/organic-ecommerce-shop/pages" element={<Pages />} />
        <Route path="/organic-ecommerce-shop/about" element={<About />} />
        <Route path="/organic-ecommerce-shop/contact" element={<Contact />} />

        {/* Directly place category routes here */}
        <Route path="/organic-ecommerce-shop/categories/fresh-fruit" element={<Fruit />} />
        <Route path="/organic-ecommerce-shop/categories/vegetables" element={<Vegetables />} />
        <Route path="/organic-ecommerce-shop/categories/river-fish" element={<Fish />} />
        <Route path="/organic-ecommerce-shop/categories/chicken-meat" element={<Meat />} />
        <Route path="/organic-ecommerce-shop/categories/drink-and-water" element={<Drink />} />
        <Route path="/organic-ecommerce-shop/categories/yogurt-and-ice-cream" element={<IceCream />} />
        <Route path="/organic-ecommerce-shop/categories/cake-and-bread" element={<Bread />} />
        <Route path="/organic-ecommerce-shop/categories/butter-cream" element={<Butter />} />
        <Route path="/organic-ecommerce-shop/categories/cooking" element={<Cooking />} />
      </Routes>
    </Router>
  );
}

export default Layouts;
