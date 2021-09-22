import React, {useState} from 'react'
import styled from 'styled-components'

const SignIn = () => {
    const [input, setInput] = useState({
        name: "",
        password:""
    })

const handleChange =(e) =>{
const name = e.target.name;
const value = e.target.value
setInput({
   ...input, [name]:value
})
}

const handleSubmit = (e) =>{
e.preventDefault();
console.log(input.name, input.password)

}
    return (
      <Container>
        
        <Form>
          <label htmlFor="username">
            Name:
            <Input
              style={{ marginLeft: "27px" }}
              type="text"
              placeholder="Username"
              value={input.name}
              name="name"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="username">
            Password:{" "}
            <Input
              type="password"
              placeholder="Password"
              value={input.password}
              name="password"
              onChange={handleChange}
            />
          </label>
        </Form>
        <Button type="submit" onClick={handleSubmit}>log In</Button>
      </Container>
    );
}
export default SignIn
const Container = styled.div`
width:100%
margin: 2px 0;
display:flex;
flex-direction:column;

`;
const Form = styled.div`
padding:7px;
display:flex;
flex-direction:column;

`;
const Button = styled.button`
padding: 7px 14px;
border:none;
outline:none;
background: red;
color:white;
margin:0 auto;
border:1px solid black;
border-radius:10px;
`;
const Input = styled.input`
margin:10px 0;
outline:none;
padding:3px;
width:300px
`

