import React from "react";

import styled from "styled-components";
import Navbar from "./components/layouts/navbar/Navbar";
import Footer from "./components/layouts/footer/Footer";
import hero from "./assets/images/pag.png";

import "./App.css";
import Home from "./pages/home/Home";

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  img {
    width: 200px;
    height: 200px;
  }
  .main {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Home />

      <Footer />
    </Container>
  );
}

export default App;
