import React from "react";
import styled from "styled-components";

const Container = styled.header`
  display: inline;
  width: 100vw;
  max-width: 1400px;
  margin: 0 auto;
`;
const Nav = styled.nav`
  height: 52px;
  width: 100%;
  background-color: var(--clr-primary-1);

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
`;
const NavLeft = styled.div`
  width: 100%;
  grid-column: span 3;
  margin-left: 15px;
`;
const NavCenter = styled.div`
  width: 100%;
  grid-column: 4 / 13;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
`;
const NavLink = styled.li`
  margin: 0 20px;
`;
const NavButton = styled.button`
  cursor: pointer;
  background: none;
  color: var(--clr-primary-4);
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <NavLeft>
          <NavLink>
            <NavButton>LOGO</NavButton>
          </NavLink>
        </NavLeft>

        <NavCenter>
          <NavLinks>
            <NavLink>
              <NavButton>خانه</NavButton>
            </NavLink>
            <NavLink>
              <NavButton>درباره ما</NavButton>
            </NavLink>
            <NavLink>
              <NavButton>ارتباط</NavButton>
            </NavLink>
          </NavLinks>
        </NavCenter>
      </Nav>
    </Container>
  );
};

export default Navbar;
