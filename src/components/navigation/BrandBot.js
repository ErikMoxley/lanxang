import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/lanxang2.png";
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
  height: 80px;
  margin: 0;
`;
