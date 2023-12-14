import React from "react";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";
import styled from "styled-components";
import backGroundImage from "./../../image/img/background.png";
import Banner from "./sections/Banner";
import Discount from "./sections/Discount";
import HotProduct from "./sections/HotProduct";
import RoundImage from "./sections/RoundImage";
import WhyChoose from "./sections/WhyChoose";

const StyledBackGround = styled.div`
  height: 100vh;
  background-image: url(${backGroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function HomePage() {
  return (
    <>
      <StyledBackGround>
        <Header />
        <Banner />
      </StyledBackGround>
      <main>
        <Discount />
        <HotProduct />
        <RoundImage />
        <WhyChoose />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
