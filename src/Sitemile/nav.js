import React from "react";
import styled from "styled-components";
import Button from "./button";

const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>SiteMile</Logo>
        <Links>
          <MyLink>Home</MyLink>
          <MyLink>Theme</MyLink>
          <MyLink>Club</MyLink>
          <MyLink>Custom</MyLink>
          <MyLink>Affiliate</MyLink>
          <MyLink>Blog</MyLink>
          <MyLink>Contact</MyLink>
          <MyLink>Account</MyLink>
          {/* <MyLink>
            <Button text="Buy Now" />
          </MyLink> */}
        </Links>
      </Wrapper>
    </Container>
  );
};
export default Nav;
const Links = styled.div`
  display: flex;
  padding: 0 30px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Logo = styled.div`
  font-size: 25px;
  font-family: cursive;
  padding: 0 40px;
`;
const MyLink = styled.div`
  margin: 0 10px;
  text-transform: uppercase;
`;
const Container = styled.div`
  width: 100%;
  height: 60px;
  color: white;
  display: flex;
  align-items: center;
`;
