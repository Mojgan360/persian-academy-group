import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  width: 1100px;
  margin: 0 auto;
  padding: 0;
  ul {
    background-color: #140f2d;
    color: #f2d7ee;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  li {
    list-style-type: none;
    cursor: pointer;
    width: 70px;
    padding: 10px 0;

    &:hover {
      background-color: #f2d7ee;
      color: #140f2d;
    }
  }
`;
const Navbar = () => {
  return (
    <Container>
      <ul>
        <li>logo</li>
        <li>خانه</li>
        <li>ارتباط</li>
        <li>درباره ما</li>
      </ul>
    </Container>
  );
};

export default Navbar;
