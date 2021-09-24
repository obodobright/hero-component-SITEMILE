import React from "react";
import styled from "styled-components";
import Button from "./button";
import Img from "./homeimage.png";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <BoxText>
          <Title>Best WP Project Bidding Theme – Freelance Marketplace 2021</Title>
          <Subtitle>
            The most complete freelancer marketplace theme in the world. Build your freelancer
            website with the best template. Finest written code and awesome customer support!
          </Subtitle>
          <Sub>
            Starting from{" "}
            <span>
              <sup>$</sup> 149
            </span>{" "}
            <Button text="See Pricing" BG cl Tt Wd Pd />
          </Sub>

          <ButtonContainer>
            <Button text="View Demo" />
            <Button text="Purchase Team" />
          </ButtonContainer>
          <BottomText>
            Latest update released on 19th August 2021 works with wordpress v5.8
          </BottomText>
        </BoxText>
        <ImageContainer>
          <BoxImage src={Img} />
          <Button text="FAQ" />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};
export default Hero;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const BottomText = styled.div`
  text-transform: capitalize;
  font-weight: 500;
  width: 380px;
  line-height: 1.5;
  padding-top: 10px;
`;
const Sub = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
    color: #69ff69;
    font-weight: bold;
    font-size: 25px;
  }
  sup {
    margin-right: -5px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-left: -10px;
  margin-top: 40px;
`;
const Title = styled.h1`
  font-family: lato, sans-serif;
`;
const Subtitle = styled.div``;

const BoxImage = styled.img`
  min-width: 320px;
  width: 400px;
  height: 500px;
  margin: 10px;
`;
const BoxText = styled.div`
  min-width: 320px;
  width: 600px;
  height: 500px;
  color: white;
  margin: 10px;
  padding: 40px 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 80px;

  align-items: center;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
`;
