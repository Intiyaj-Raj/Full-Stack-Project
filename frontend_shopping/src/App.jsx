import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Query from "./pages/Query";
import Login from "./components/Login";
import Reg from "./components/Reg";
import Cart from "./pages/Cart";
import AdminDashboard from "./admin/AdminDashboard";
import AdminProducts from "./admin/AdminProducts";
import AddProducts from "./admin/AddProducts";
import EditProducts from "./admin/EditProducts";
import AdminQuery from "./admin/AdminQuery";
import QueryReply from "./admin/QueryReply";
import ForgotPass from "./components/ForgotPass";
import { cartTotal, fetchCart, saveCart } from "./features/Cart/CartSlice";

const App = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.Cart.cart);
  const cartAllTotal = useSelector((state) => state.Cart);
  const [cartLoaded, setCartLoaded] = useState(false);

  // Fetch the saved cart once when the app loads, if the user is logged in.
  // This lives here (not in Cart.jsx) so it only ever overwrites local state
  // ONE time, at startup — never again after an addToCart from any page.
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setCartLoaded(true);
      return;
    }

    dispatch(fetchCart()).finally(() => {
      setCartLoaded(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Recompute totals whenever the cart items change, from any page.
  useEffect(() => {
    dispatch(cartTotal());
  }, [cartData, dispatch]);

  // Persist to the server whenever the cart changes, debounced, and only
  // after the initial fetch has completed. Being at the App level means an
  // addToCart on the Product page now gets saved even if you never open
  // the Cart page right away.
  useEffect(() => {
    if (!cartLoaded) return;

    const token = localStorage.getItem("token");
    if (!token) return;

    const timeoutId = setTimeout(() => {
      dispatch(
        saveCart({
          cartItems: cartData,
          totalPrice: cartAllTotal.TotalPrice,
          totalQuantity: cartAllTotal.TotalQuantity,
        }),
      );
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [cartData, cartAllTotal, cartLoaded, dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* for user */}
          <Route path="/" element={<HomePage />} />
          <Route path="/query" element={<Query />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/forgotPassword" element={<ForgotPass />} />

          {/* for admin */}

          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/adminproduct" element={<AdminProducts />} />
          <Route path="/admin/add-products" element={<AddProducts />} />
          <Route path="/admin/edit-product/:id" element={<EditProducts />} />
          <Route path="/admin/adminquery" element={<AdminQuery />} />
          <Route path="/admin/queryreply/:id" element={<QueryReply />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
