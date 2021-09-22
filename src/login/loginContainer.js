import React, {useState} from 'react'
import styled from 'styled-components'
import SignIn from './signin';
import SignUp from "./signup";
const LoginContainer = ({bg, cl}) =>{
const [signIn, setSignin] = useState(true)
const [signUp, setSignUp] = useState(false);

const openSignIn = () =>{
setSignin(true);
setSignUp(false)
}
const openSignUp = () => {
  setSignUp(true);
  setSignin(false);
  
};

  return (
    <Container>
      <Wrapper>
        <Route>
          <Pageroute bg cl onClick={openSignIn}>Sign In</Pageroute>
          <Pageroute onClick={openSignUp}>Sign Up</Pageroute>
        </Route>
        <ContainerWrapper>{signIn && <SignIn />}</ContainerWrapper>
        <ContainerWrapper>{signUp && <SignUp />}</ContainerWrapper>
      </Wrapper>
    </Container>
  );
}
export default LoginContainer

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content:CENTER;
  align-items: center;
  width:100%
`;
const Wrapper= styled.div`
background:white; 
padding-bottom:10px


`;
const ContainerWrapper =styled.div`


`
const Pageroute = styled.div`
  width: 80%;
  padding: 6px 9px;
  background: ${({ bg }) => (bg ? "black" : "white")};
  color: ${({ cl }) => (cl ? "white" : "black")};
  cursor: pointer;
  mrgin: 0 10px;
  text-align: center;
  border-bottom: 2px solid red;
  
  
`;
const Route = styled.div`
  display: flex;
  justify-content: space-around;
 

 align-items:center
`;