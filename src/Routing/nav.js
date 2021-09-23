import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container>
      <Logo>Bright Lumen</Logo>
      <NavLinks>
        <Links to="/">Home</Links>
        <Links to="/contact">Contact</Links>
        <Links to="/settings">Settings</Links>
        <Links to="/about">About</Links>
      </NavLinks>
    </Container>
  );
};
export default NavBar;
const Logo = styled.div`
  font-size: 20px;
  color: white;
  font-family: cursive;
`;
const Links = styled(Link)`
  margin: 0 10px;
  cursor: pointer;
  text-decoration:none;
  color:white;

  :hover {
      font-size:18px;
      
  }
`;
const NavLinks = styled.div`
  display: flex;
`;
const Container = styled.div`
  width: 100%;
  height: 60px;
  background: darkblue;
  display: flex;
  align-items: center;
  padding: 10px;
  color: white;
  justify-content: space-between;
`;
