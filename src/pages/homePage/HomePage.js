import React from "react";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";
import styled from "styled-components";
import backGroundImage from "./../../image/img/background.png";
import Banner from "./sections/Banner";

const StyledBackGround = styled.div`
  background-image: url(${backGroundImage});
  background-position: center;
  background-repeat: no-repeat;
`;

function HomePage() {
  return (
    <>
      <StyledBackGround>
        <Header />
        <Banner />
      </StyledBackGround>
      <main>
        <section>discount</section>
        <section>hot product</section>
        <section>round image</section>
        <section>why you choose tt</section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
