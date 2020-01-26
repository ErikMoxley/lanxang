import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import "../../styles/Header.css";

const BrandTop = () => {
  return (
    <a href="/" className="logoBrandTop">
      <Image className="logo" src={logo} alt="" />
    </a>
  );
};

export default BrandTop;

const Image = styled.img`
  height: 100%;
  margin: 0;
  @media (min-width: 569px) {
    display: none;
    margin-left: -5rem;
`;
