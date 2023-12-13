import React from "react";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";
import styled from "styled-components";
import backGroundImage from "./../../image/img/background.png";
import Banner from "./sections/Banner";
import Discount from "./sections/Discount";

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
        <section>hot product</section>
        <section>round image</section>
        <section>why you choose tt</section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
