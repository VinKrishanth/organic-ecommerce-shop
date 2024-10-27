import React from 'react'
import { Route } from 'react-router-dom';
import Fruit from '../Pages/Categories/Fruit'
import Vegetables from '../Pages/Categories/Vegetables'
import Fish from '../Pages/Categories/Fish'
import Meat from '../Pages/Categories/Meat'
import Drink from '../Pages/Categories/Drink'
import IceCream from '../Pages/Categories/IceCream'
import Bread from '../Pages/Categories/Bread'
import Butter from '../Pages/Categories/Butter'
import Cooking from '../Pages/Categories/Cooking'

function CategoriesRoutes() {
  return (
    <>
      <Route path="/organic-ecommerce-shop/categories/fresh-fruit" element={< Fruit />} />
      <Route path="/organic-ecommerce-shop/categories/vegetables" element={< Vegetables />} />
      <Route path="/organic-ecommerce-shop/categories/river-fish" element={< Fish />} />
      <Route path="/organic-ecommerce-shop/categories/chicken-meant" element={< Meat />} />
      <Route path="/organic-ecommerce-shop/categories/drink-and-water" element={< Drink />} />
      <Route path="/organic-ecommerce-shop/categories/yogurt-and-ice-cream" element={< IceCream />} />
      <Route path="/organic-ecommerce-shop/categories/cake-and-bread" element={< Bread />} />
      <Route path="/organic-ecommerce-shop/categories/butter-cream" element={< Butter />} />
      <Route path="/organic-ecommerce-shop/categories/cooking" element={< Cooking />} />
    </>
  )
}

export default CategoriesRoutes