import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useSpring, animated } from "react-spring";

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200]
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <NavLinks className="navLinks">
          <li>
            <Link to="/menu" onClick={props.handleNavbar}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/promos" onClick={props.handleNavbar}>
              Promos
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={props.handleNavbar}>
              Order
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={props.handleNavbar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/careers" onClick={props.handleNavbar}>
              Careers
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={props.handleNavbar}>
              Contact
            </Link>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  height: 100%;
  top: 4rem;
  left: 0;
  right: 0;
  @media (min-width: 669px) {
    display: none;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 75%;
  & li {
    transition: all 300ms linear 0s;
  }
  & a {
    font-size: 1.4rem;
    line-height: 4;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #dfe6e9;
      border-bottom: 1px solid #dfe6e9;
    }
  }
`;
