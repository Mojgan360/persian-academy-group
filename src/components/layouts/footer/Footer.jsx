import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Afshin Asgari</span>
      </h5>
      <h5>All rights reserved.</h5>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  background-color: #140f2d;
  color: #f2d7ee;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  left: 40%;
  span {
    color: #fff;
  }
  h5 {
    color: #f2d7ee;
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;
