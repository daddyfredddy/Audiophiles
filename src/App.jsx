import Nav from "./Components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
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
            <Route path=":cart" element={<Cart />} />
            <Route path=":checkout" element={<Checkout />} />
            <Route path=":checkoutFinal" element={<CheckoutFinal />} />
          </Routes>
        </main>

        {/* Main components */}
      </BrowserRouter>
    </div>
  );
}

export default App;
