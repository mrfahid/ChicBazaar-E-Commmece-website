import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage, Cart, Checkout, ContactPage, Home, Login, PageNotFound, Product, Products, SignUp, TopRatedProducts } from './pages';
import Layout from './Layout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import AOS from "aos";
import "aos/dist/aos.css";

const stripePromise = loadStripe('your-publishable-key-here');

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="topratedproducts" element={<TopRatedProducts />} />
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
      </div>
  );
}

export default App;
