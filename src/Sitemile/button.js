import React from "react";
import styled from "styled-components";

const GlobalButton = ({ text, BG, cl, Tt, Wd, Pd }) => {
  return (
    <Container>
      <Button background={BG} color={cl} textTransform={Tt} width={Wd} padding={Pd}>
        {text}
      </Button>
    </Container>
  );
};
export default GlobalButton;

const Container = styled.div``;
const Button = styled.button`
  outline: none;
  border: 0;
  border-radius: 5px;
  background: ${({ background }) => (background ? " #ECC700" : " #007bff")};
  padding: ${({ padding }) => (padding ? "1px 3px" : "7px 14px")};
  color: ${({ color }) => (color ? "black" : "white")};
  width: ${({ width }) => (width ? "100px" : "200px")};
  text-transform: ${({ textTransform }) => (textTransform ? "capitalize" : "uppercase")};
  margin: 10px;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    background: ${({ background }) => (background ? " #FCFF03" : " #4C7BB5")};
    transform: scale(1.05);
  }
`;
