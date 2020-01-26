import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import "../../styles/Header.css";

const BrandBot = () => {
  return (
    <Link to="/" className="logoBrand">
      <Image className="logo" src={logo} alt="" />
    </Link>
  );
};

export default BrandBot;

const Image = styled.img`
  height: 200%;
  margin: 0;
`;
