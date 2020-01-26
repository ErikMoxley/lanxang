import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { Link } from "react-router-dom";

import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import "../../styles/Header.css";
import BrandBot from "./BrandBot";

const Botnav = props => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)"
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  return (
    <>
      <NavBarBot style={barAnimation}>
        <FlexContainer>
          <BrandBot />
          <NavLinks style={linkAnimation}>
            <Link className="navLinks" to="menu">
              Menu
            </Link>
            <Link className="navLinks" to="promos">
              Promos
            </Link>
            <Link className="navLinks" to="order">
              Order
            </Link>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBarBot>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

export default Botnav;

const NavBarBot = styled(animated.nav)`
  position: fixed;
  width: 100%;
  height: 90px;
  top: 45px;
  left: 0;
  background: #e3e3e3;
  z-index: 1;
  font-size: 2.5rem;
  @media (max-width: 669px) {
    display: none;
`;

const FlexContainer = styled.div`
  max-width: 100%;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: left;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  margin-top: 3rem;
  padding-left: 3.2rem;

  & a {
    color: #5a5a5a;
    text-transform: uppercase;
    font-weight: 700;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 200ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #69b7d6;
      border-bottom: 3px solid #69b7d6;
      border-top: 3px solid #69b7d6;
    }

    @media (max-width: 669px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 569px) {
    display: none;
  }
`;
