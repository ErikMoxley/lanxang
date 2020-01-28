import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { Link } from "react-router-dom";

import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import BrandTop from "./BrandTop";
import "../../styles/Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

const Topnav = props => {
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
      <NavBarTop style={barAnimation}>
        <FlexContainer>
          <BrandTop />
          <div className="coName">
            <Link className="navLinks" to="/">
              <h1 className="title">LANXANG</h1>
            </Link>
          </div>
          <NavLinks style={linkAnimation}>
            <Link className="navLinks" to="about">
              About
            </Link>
            <Link className="navLinks" to="careers">
              Careers
            </Link>
            <Link className="navLinks" to="contact">
              Contact
            </Link>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
          <div class="socialMedia">
            <ul className="socialMediaList">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://www.discord.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </a>
            </ul>
          </div>
        </FlexContainer>
      </NavBarTop>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

export default Topnav;

const NavBarTop = styled(animated.nav)`
  position: fixed;
  width: 100%;
  height: 45px;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 3;
  font-size: 1.4rem;
  // @media (max-width: 369px) {
  //   font-size: 1rem;
  // }
`;

const FlexContainer = styled.div`
  max-width: 100%;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  padding-left: 11rem;
  justify-content: flex-start;
  height: 5rem;
  @media (max-width: 669px) {
    justify-content: space-between !important;
  }
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  margin-top: 1rem;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #69b7d6;
      border-bottom: 1px solid #69b7d6;
    }

    @media (max-width: 669px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 669px) {
    display: none;
  }
`;
