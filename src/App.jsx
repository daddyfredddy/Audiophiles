<<<<<<< HEAD
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./assets/Nav.jsx";
import Footer from "./assets/Footer.jsx";
import Headphones from "./pages/Headphones/Headphones";
import Speakers from "./pages/Speakers/Speakers";
import Earphones from "./pages/Earphones/Earphones";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Home from "./pages/Home/Home.jsx";
import Headphones1 from "./pages/Headphones/Headphones1.jsx";
import Headphones2 from "./pages/Headphones/Headphones2.jsx";
import Headphones3 from "./pages/Headphones/Headphones3.jsx";
import Speakers1 from "./pages/Speakers/Speakers1.jsx";
import Speakers2 from "./pages/Speakers/Speakers2.jsx";
import Earphones1 from "./pages/Earphones/Earphones1.jsx";
// import { ShopContextProvider } from "./Context/ShopContext.jsx";

function App() {
  return (
    <div className="">
      {/* <ShopContextProvider> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/headphones1" element={<Headphones1 />}></Route>
        <Route path="/headphones2" element={<Headphones2 />} />
        <Route path="/headphones3" element={<Headphones3 />} />
        <Route path="/speakers1" element={<Speakers1 />} />
        <Route path="/speakers2" element={<Speakers2 />} />
        <Route path="/earphones1" element={<Earphones1 />} />
      </Routes>
      {/* <Aside /> */}
      {/* <Article /> */}
      <Footer />
      {/* </ShopContextProvider> */}
=======
import Nav from "./Components/Nav";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// PAGES
import Home from "./Pages/Home.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import CheckoutFinal from "./Pages/CheckoutFinal.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Nav />
        </div>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route
              path="/Headphones"
              element={<ShopCategory category="headphones" />}
            />
            <Route
              path="/Speakers"
              element={<ShopCategory category="speakers" />}
            />
            <Route
              path="/Earphones"
              element={<ShopCategory category="earphones" />}
            />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>

            <Route path=":cart" element={<Cart />} />
            <Route path=":checkout" element={<Checkout />} />
            <Route path=":checkoutFinal" element={<CheckoutFinal />} />
          </Routes>
        </main>

        {/* Main components */}
      </BrowserRouter>
>>>>>>> 64f75de (first commit)
    </div>
  );
}

export default App;
