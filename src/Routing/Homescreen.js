import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './nav'
import {Home, About, Settings, Contact} from './component'
const Homescreen = () => {
    return (
      <Container>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/settings" exact component={Settings}></Route>
            <Route path="/contact" exact component={Contact}></Route>
          </Switch>
        </Router>
      </Container>
    );
}
export default Homescreen
const Container = styled.div`
width:100%;
min-height:100vh;
height:100%;
background:lightblue;

`