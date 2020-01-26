import React from "react";
import styled from "styled-components";

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
            <a href="/" onClick={props.handleNavbar}>
              Menu
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              Promo
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              Order
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              About
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              Careers
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              Contact
            </a>
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
  top: 4rem;
  left: 0;
  right: 0;
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
