import React from "react";

import styled from "styled-components";
import hero from "./assets/images/pag.png";
import "./App.css";
const Container = styled.div`
  img {
    width: 200px;
    height: 200px;
  }
`;

function App() {
  return (
    <Container className="App">
      <h2>
        on working.....
        <img src={hero} alt="hero" />
      </h2>
    </Container>
  );
}

export default App;
