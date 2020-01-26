import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/lanxang1.png";
import "../../styles/Header.css";

const BrandTop = () => {
  return (
    <Link to="/" className="logoBrandTop">
      <Image className="logo" src={logo} alt="" />
    </Link>
  );
};

export default BrandTop;

const Image = styled.img`
  height: 40px;
  margin: 0;
  @media (min-width: 669px) {
    display: none;
    margin-left: -5rem;
  }
`;
