import React from "react";
import styled from "styled-components";

export const Home = () => {
  return <Container>
      <ContainerText>Hello there, hhere is my Home</ContainerText>
  </Container>;
};
export const About = () =>{
   return (
     <Container>
       <ContainerText>Welcome to my Cntact page</ContainerText>
     </Container>
   ); 
}
export const Contact = () => {
  return (
    <Container>
      <ContainerText>yo BITCH, y'all can contact me</ContainerText>
    </Container>
  );
};

const Container = styled.div;
const ContainerText = styled.div``
