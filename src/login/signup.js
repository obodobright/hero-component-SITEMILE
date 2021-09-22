import React, { useState } from "react";
import styled from "styled-components";

const SignUp = () => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    verifyPassword: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };
  return (
    <Container>
      <Form>
        <label htmlFor="firstname">
          First Name:
          <Input
            style={{ marginLeft: "27px" }}
            type="text"
            value={input.firstname}
            name="firstname"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="lastname">
          Last Name:
          <Input
            style={{ marginLeft: "27px" }}
            type="text"
            value={input.lastname}
            name="lastname"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="username">
          Username:
          <Input
            style={{ marginLeft: "27px" }}
            type="text"
            value={input.username}
            name="username"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="Email">
          Email:
          <Input
            style={{ marginLeft: "5vw" }}
            type="text"
            value={input.email}
            name="email"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          Password:{" "}
          <Input
            style={{ marginLeft: "30px" }}
            type="password"
            value={input.password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="verifyPassword">
          Verify Password:{" "}
          <Input
            type="password"
            value={input.verifyPassword}
            name="verifyPassword"
            onChange={handleChange}
          />
        </label>
      </Form>
      <Button type="submit">Sign Up</Button>
    </Container>
  );
};
export default SignUp;
const Container = styled.div`
width:100%
margin: 2px 0;
display:flex;
flex-direction:column;

`;
const Form = styled.div`
  padding: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  padding: 7px 14px;
  border: none;
  outline: none;
  background: red;
  color: white;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
`;
const Input = styled.input`
  margin: 10px 0;
  outline: none;
  padding: 3px;
  width: 300px;
`;
