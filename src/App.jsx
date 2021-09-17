import React from "react";
import styled from 'styled-components'
// import Game from "./game/game";
import Home from './Github-desktop/homeContainer'

function App() {
  return (
    <React.Fragment>
      <Container>
        <Home />
      </Container>
    </React.Fragment>
  );
}


export default App;
const Container = styled.div`
height:100%;
width:100%;
`
