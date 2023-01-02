import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ProductListPage from "./ProductListPage";
import { Routes, Route } from "react-router-dom";
import AboutProduct from "./AboutProduct";
import NoFoundPage from './NoFoundPage';
import CartPage from "./CartPage"
import Login from "./Login"
import SignUp from "./SignUp"
import ForgotPassword from "./ForgotPassword"
import UserRoute from "./UserRoute"
import AuthRoute from "./AuthRoute"
import UserProvider from "./providers/UserProvider"
import AlertProvider from "./providers/AlertProvider"
import CartProvider from "./providers/CartProvider"
import Test from "./Test"


function App() {


  return (
    <div>
     <CartProvider>
      <UserProvider>
        <AlertProvider>
          

          <Header />
          <div className="sm:p-8 p-5 bg-gray-300 min-h-screen">

            <Routes>
              <Route path="/Test" element={<Test />} />
              <Route index element={<UserRoute> <ProductListPage /> </UserRoute>} />
              <Route path="/AboutProduct/:id" element={<AboutProduct />} />
              <Route path="/Login" element={<AuthRoute> <Login /> </AuthRoute>} />
              <Route path="/CartPage" element={<UserRoute><CartPage  /></UserRoute>} />
              <Route path="/SignUp"
                element={<AuthRoute><SignUp /></AuthRoute>} />
              <Route path="/ForgotPassword"
                element={<ForgotPassword />} />

              <Route path="*" element={<NoFoundPage />} />
              
            </Routes>
          </div>
          <Footer />
        </AlertProvider>
      </UserProvider>
  </CartProvider>
    </div>


  );
}


export default App;