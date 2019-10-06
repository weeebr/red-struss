import React from "react";
import logo from "../assets/images/logo.webp";
import styled from "styled-components";
import { colors } from "../theme";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin: 20px 20px 0 20px;

  .title {
    font-size: 32px;
    font-weight: bold;
    background: ${colors.footerBg};
    color: white;
    padding: 3px 10px;
  }
`;

const Logo = styled.div`
  width: 148px;
  margin-right: 40px;

  img {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <p className="title">Recycling- & Eventdienstleistungen</p>
    </StyledHeader>
  );
};

export default Header;
