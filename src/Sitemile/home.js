import React from "react";
import styled from "styled-components";
import Hero from "./hero";
import Nav from "./nav";

const Home = () => {
  return (
    <Container>
      <Nav />
      <Hero />
    </Container>
  );
};
export default Home;

const Container = styled.div`
  width: 100%;
  min-height: 130vh;
  height: 100%;
  background-image: url("bg-color.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
