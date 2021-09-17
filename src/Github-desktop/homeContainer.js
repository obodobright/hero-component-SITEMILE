import React from "react";
import styled from "styled-components";
import HomeCenter from "./MiddleHome/homeCenter";
import HomeIndex from './homeIndex';
import HomeBottomCenter from "./bottomHome/HomeBottomContainer"

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <HomeIndex />
        <HomeCenter />
        <HomeBottomCenter />
      </Wrapper>
    </Container>
  );
};
export default Home;

const Container = styled.div`
 min-height:100vh;
 height:100%;
 
 `;
const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  background: #24292e;
  background-image: url("background.svg");
  background-position: auto;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
`;
