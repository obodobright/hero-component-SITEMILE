import React from "react";
import styled from "styled-components";

export const Home = () => {
  return <Container>
      <Header>Hello</Header>
      <SubTitle>Come lets take a tour around!</SubTitle>
  </Container>;
  
};
export const About = () => {
  return (
    <Container>
      <Header>Guess who Am I?</Header>
      <SubTitle>Bright, like Bright diamond star is my name, and i rule my world!</SubTitle>
    </Container>
  );
};
export const Settings = () => {
  return (
    <Container>
      <Header>I am An Engineer too</Header>
      <SubTitle>I can help you fix whatever you want, especially things on the web</SubTitle>
    </Container>
  );
};
export const Contact = () => {
  return (
    <Container>
      <Header>Contact Me</Header>
      <SubTitle>With you going through my page, contact me!</SubTitle>
    </Container>
  );
};
const SubTitle = styled.div`
font-size:20px;
text-align:center;
width:400px;

`
const Header = styled.div`
font-size:50px;
margin:10px 0;
font-weight:500;
color:orange
`
const Container = styled.div`
width:100%;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center
`

