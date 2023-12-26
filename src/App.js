import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Foods from "./pages/products/Foods/Foods";
import Sites from "./pages/products/Sites/Sites";
import Hotels from "./pages/products/Hotels/Hotels";
import Tickets from "./pages/products/Tickets/Tickets";
import Cart from "./pages/cart/Cart";
import GlobalStyles from "./globalStyles/GlobalStyles";
import ProductLayout from "./layout/ProductLayout";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import ForgetPassword from "./pages/login/ForgetPassword";
import MemberLayout from "./layout/MemberLayout";
import LoginLayout from "./layout/LoginLayout";
import EditInformation from "./pages/member/EditInformation";
import ResetPassword from "./pages/member/ResetPassword";
import MyCollect from "./pages/member/MyCollect";
import MyComment from "./pages/member/MyComment";
import MyOrderHistory from "./pages/member/MyOrderHistory";
import CheckOutLayout from "./pages/checkoutResult/CheckOutLayout";
import Success from "./pages/checkoutResult/Success";
import Fail from "./pages/checkoutResult/Fail";
import FoodDetail from "./pages/products/Foods/FoodDetail";
import SiteDetail from "./pages/products/Sites/SiteDetail";
import HotelDetail from "./pages/products/Hotels/HotelDetail";
import TicketDetail from "./pages/products/Tickets/TicketDetail";
import RegularLayout from "./layout/RegularLayout";
import ProductDetailLayout from "./layout/ProductDetailLayout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MemberProvider } from "./context/MemberContext";
import { SearchProvider } from "./context/SearchContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <SearchProvider>
        <MemberProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <GlobalStyles />
            <BrowserRouter>
              <Routes>
                <Route index element={<Navigate replace to="homepage" />} />
                <Route path="homepage" element={<HomePage />} />

                <Route element={<LoginLayout />}>
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="forget-password" element={<ForgetPassword />} />
                </Route>

                <Route element={<RegularLayout />}>
                  <Route path="" element={<MemberLayout />}>
                    <Route path="member" element={<EditInformation />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                    <Route path="my-collect" element={<MyCollect />} />
                    <Route path="my-comment" element={<MyComment />} />
                    <Route path="order" element={<MyOrderHistory />} />
                  </Route>
                  <Route element={<ProductLayout />}>
                    <Route path="foods" element={<Foods />} />
                    <Route path="sites" element={<Sites />} />
                    <Route path="hotels" element={<Hotels />} />
                    <Route path="tickets" element={<Tickets />} />
                  </Route>
                  <Route element={<ProductDetailLayout />}>
                    <Route path="foods/detail/:sid" element={<FoodDetail />} />
                    <Route path="sites/detail/:sid" element={<SiteDetail />} />
                    <Route
                      path="tickets/detail/:sid"
                      element={<TicketDetail />}
                    />
                    <Route
                      path="hotels/detail/:sid"
                      element={<HotelDetail />}
                    />
                  </Route>
                </Route>

                <Route path="cart" element={<Cart />} />

                <Route path="checkout" element={<CheckOutLayout />}>
                  <Route path="success" element={<Success />} />
                  <Route path="fail" element={<Fail />} />
                </Route>

                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </MemberProvider>
      </SearchProvider>
    </>
  );
}

export default App;
