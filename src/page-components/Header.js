import React from "react";
import logo from "../assets/images/logo.webp";
import styled from "styled-components";
import { colors } from "../theme";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin: 20px auto 40px auto;

  @media (min-width: 1280px) {
    width: 1220px;
  }

  @media (max-width: 1048px) {
    padding: 0 20px;
    width: 990px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    margin-top: 24px;
    width: unset;
  }

  .title {
    font-size: 32px;
    font-family: OpenSansBold;
    text-transform: uppercase;
    letter-spacing: unset;
    background: black;
    color: white;
    padding: 3px 10px;
    transition: 0.3s ease;

    &:hover {
      background: ${colors.primaryAnthracite};
    }

    @media (max-width: 960px) {
      font-size: 24px;
    }
  }
`;

const Logo = styled.div`
  width: 148px;
  margin-right: 40px;

  img {
    width: 100%;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Header = ({ isNavigationOpen }) => {
  return (
    <StyledHeader className={isNavigationOpen ? "open" : null}>
      <a style={{ borderBottom: 0 }} href="/">
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
      </a>
      <p className="title">Recycling- & Eventdienstleistungen</p>
    </StyledHeader>
  );
};

export default Header;
