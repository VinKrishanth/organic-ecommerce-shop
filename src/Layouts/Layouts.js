import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Auth/Login';
import { Home, Shop, Blog, Pages, About, Contact, Product,SingleBlogs,SignIn,SignUp } from '../Pages';
import { Fruit, Vegetables, Fish, Meat, Drink, IceCream, Bread, Butter, Cooking ,TrackOrder} from '../Pages/Categories';
import {BeautyAndHealth , BreadAndBakery, FruitVegetable, MeatAndFish} from '../Pages/shops'
import {Cart, MyAccount, OrderHistory, Wishlist, Setting,OrderDetails, Checkout} from '../Pages/Account'
import {Faqs, Policy, Terms} from '../Pages/Helps';
import ScrollToTop from '../Containers/ScrollToTop';

function Layouts() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organic-ecommerce-shop/shop" element={<Shop />} />
        <Route path="/organic-ecommerce-shop/blog" element={<Blog />} />
        <Route path="/organic-ecommerce-shop/blog/single-blog" element={<SingleBlogs />} />
        <Route path="/organic-ecommerce-shop/pages" element={<Pages />} />
        <Route path="/organic-ecommerce-shop/about" element={<About />} />
        <Route path="/organic-ecommerce-shop/contact" element={<Contact />} />
        <Route path="/organic-ecommerce-shop/product" element={<Product />} />
        {/* <Route path="/organic-ecommerce-shop/login" element={<Login />} /> */}

        
        <Route path="/organic-ecommerce-shop/categories/fresh-fruit" element={<Fruit />} />
        <Route path="/organic-ecommerce-shop/categories/vegetables" element={<Vegetables />} />
        <Route path="/organic-ecommerce-shop/categories/river-fish" element={<Fish />} />
        <Route path="/organic-ecommerce-shop/categories/chicken-meat" element={<Meat />} />
        <Route path="/organic-ecommerce-shop/categories/drink-and-water" element={<Drink />} />
        <Route path="/organic-ecommerce-shop/categories/yogurt-and-ice-cream" element={<IceCream />} />
        <Route path="/organic-ecommerce-shop/categories/cake-and-bread" element={<Bread />} />
        <Route path="/organic-ecommerce-shop/categories/butter-cream" element={<Butter />} />
        <Route path="/organic-ecommerce-shop/categories/cooking" element={<Cooking />} />
        <Route path="/organic-ecommerce-shop/categories/track-order" element={<TrackOrder />} />

        <Route path="/organic-ecommerce-shop/beauty-and-health" element={<BeautyAndHealth />} />
        <Route path="/organic-ecommerce-shop/bread-and-bakery" element={<BreadAndBakery />} />
        <Route path="/organic-ecommerce-shop/fruit-vegetable" element={<FruitVegetable />} />
        <Route path="/organic-ecommerce-shop/meat-and-fish" element={<MeatAndFish />} />

        <Route path="/organic-ecommerce-shop/my-account" element={<MyAccount />} />
        <Route path="/organic-ecommerce-shop/my-account/sign-in" element={<SignIn />} />
        <Route path="/organic-ecommerce-shop/my-account/sign-up" element={<SignUp />} />
        <Route path="/organic-ecommerce-shop/my-account/order-history" element={<OrderHistory />} />
        <Route path="/organic-ecommerce-shop/my-account/shopping-cart" element={<Cart />} />
        <Route path="/organic-ecommerce-shop/my-account/shopping-cart/checkout" element={<Checkout />} />
        <Route path="/organic-ecommerce-shop/my-account/wishlist" element={<Wishlist />} />
        <Route path="/organic-ecommerce-shop/my-account/setting" element={<Setting />} />
        <Route path="/organic-ecommerce-shop/my-account/order-history/order-details" element={<OrderDetails />} />

        <Route path="/organic-ecommerce-shop/helps/faqs" element={<Faqs />} />
        <Route path="/organic-ecommerce-shop/helps/terms-and-condition" element={<Terms />} />
        <Route path="/organic-ecommerce-shop/helps/privacy-policy" element={<Policy />} />


      </Routes>
    </Router>
  );
}

export default Layouts;
