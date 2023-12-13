import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Member from "./pages/member/Member";
import Foods from "./pages/products/Foods/Foods";
import Itinerarys from "./pages/products/Itinerarys/Itinerarys";
import Stays from "./pages/products/Stays/Stays";
import Tickets from "./pages/products/Tickets/Tickets";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="member" element={<Member />} />
          <Route path="foods" element={<Foods />} />
          <Route path="itinerary" element={<Itinerarys />} />
          <Route path="stays" element={<Stays />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
