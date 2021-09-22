import React from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Contact, About } from "./home"
import Nav from "./nav"

const HomeScreen = () => {
    return (
      <Container>
        <Router>
           <Nav />
          {" "}
          <Switch>
             <Route path="/" exact component={Home}></Route>
             <Route path="/contact" exact component={Contact}></Route>
            <Route path="/about" exact component={About}></Route>
            {" "}
          </Switch>
          {" "}
        </Router>
      </Container>
      // <Container>
      //   <Router>
      //       <Nav />
      //     <Switch>
      //       <Route path="/" exact component={Home}></Route>
      //       <Route path="/contact" exact component={Contact}></Route>
      //       <Route path="/about" exact component={About}></Route>
      //     </Switch>
      //   </Router>
      // </Container>
    );
}
export default HomeScreen
const Container = styled.div `
width:100%;
background:white;
min-height:100vh;

`