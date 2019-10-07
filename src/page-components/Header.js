import React from "react";
import logo from "../assets/images/logo.webp";
import styled from "styled-components";
import { colors, pageFullWidth, breakpoints } from "../theme";
import bgImage from "../assets/images/bg.jpg";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin: 20px auto 40px auto;
  padding: 0 40px;
  max-width: ${pageFullWidth}px;
  width: 100%;

  &.open {
    background: linear-gradient(
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
      ),
      url(${bgImage});
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 20px 40px 40px 40px;
    z-index: 3;
  }

  .title {
    font-size: 32px;
    font-family: OpenSansBold;
    text-transform: uppercase;
    letter-spacing: unset;
    background: ${colors.footerBg};
    color: white;
    padding: 3px 10px;

    ${breakpoints.tablet} {
      font-size: calc(100% / 10);
    }
  }
`;

const Logo = styled.div`
  width: 148px;
  margin-right: 40px;

  img {
    width: 100%;
  }
`;

const Header = ({ isNavigationOpen }) => {
  return (
    <StyledHeader className={isNavigationOpen ? "open" : null}>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <p className="title">Recycling- & Eventdienstleistungen</p>
    </StyledHeader>
  );
};

export default Header;
