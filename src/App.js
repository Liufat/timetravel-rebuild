import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Foods from "./pages/products/Foods/Foods";
import Itinerarys from "./pages/products/Itinerarys/Itinerarys";
import Stays from "./pages/products/Stays/Stays";
import Tickets from "./pages/products/Tickets/Tickets";
import Cart from "./pages/cart/Cart";
import GlobalStyles from "./globalStyles/GlobalStyles";
import ProductLayout from "./pages/products/ProductLayout";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import ForgetPassword from "./pages/login/ForgetPassword";
import MemberLayout from "./pages/member/MemberLayout";
import LoginLayout from "./pages/login/LoginLayout";
import EditInformation from "./pages/member/EditInformation";
import ResetPassword from "./pages/member/ResetPassword";
import MyCollect from "./pages/member/MyCollect";
import MyComment from "./pages/member/MyComment";
import MyOrderHistory from "./pages/member/MyOrderHistory";
import CheckOutLayout from "./pages/checkoutResult/CheckOutLayout";
import Success from "./pages/checkoutResult/Success";
import Fail from "./pages/checkoutResult/Fail";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="homepage" />} />
          <Route path="homepage" element={<HomePage />} />

          <Route path="login" element={<LoginLayout />}>
            <Route path="" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgetpassword" element={<ForgetPassword />} />
          </Route>

          <Route path="member" element={<MemberLayout />}>
            <Route path="" element={<EditInformation />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="mycollect" element={<MyCollect />} />
            <Route path="mycomment" element={<MyComment />} />
            <Route path="myorderhistory" element={<MyOrderHistory />} />
          </Route>

          <Route path="product" element={<ProductLayout />}>
            <Route path="foods" element={<Foods />} />
            <Route path="itinerary" element={<Itinerarys />} />
            <Route path="stays" element={<Stays />} />
            <Route path="tickets" element={<Tickets />} />
          </Route>

          <Route path="cart" element={<Cart />} />

          <Route path="checkout" element={<CheckOutLayout />}>
            <Route path="success" element={<Success />} />
            <Route path="fail" element={<Fail />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
