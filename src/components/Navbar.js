import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background-color: #0a0a0f;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  
  span {
    color: #00ffff;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    color: #00ffff;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo href="#home">
        Sai<span>Suraj</span>
      </Logo>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#certifications">Certifications</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;