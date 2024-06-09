import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage, Cart, Checkout, ContactPage, Home, Login, PageNotFound, Product, Products, SignUp } from './pages';
import Layout from './Layout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-publishable-key-here');

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="checkout" element={
            <Elements stripe={stripePromise}>
              <Checkout />
            </Elements>
          } />
          <Route path="*" element={<PageNotFound />} />
          <Route path="product/*" element={<PageNotFound />} />
        </Route>
      </Routes>
  );
}

export default App;
