import React from "react";
import logo from "../assets/images/logo.webp";
import styled from "styled-components";
import { pageFullWidth } from "../theme/index";
import { breakpoint, device } from "./../theme/index";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin: 36px auto 40px auto;
  width: calc(977px + 57px + 20px);

  @media (min-width: ${pageFullWidth + 130}px) {
    width: ${pageFullWidth + 60}px;
  }

  @media (max-width: 1048px) {
    padding: 20px;
    width: calc(100vw - 57px);
    margin: 36px 20px;
  }

  @media (max-width: 1118px) {
    width: unset;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    margin: 8px 20px -10px 20px;
    width: unset;
  }

  ${breakpoint(device.phone)} {
    margin: 0;
    padding: 4%;
    background: white;
  }

  && a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0;
    margin: 7px 12px 2px 2px;

    @media (min-width: ${pageFullWidth + 130}px) {
      width: 277px;
    }
  }

  .title {
    font-size: 32px;
    font-family: OpenSans;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    background: linear-gradient(90deg, transparent, rgba(210, 210, 210, 0.25));
    color: black;
    padding: 9px 16px;
    transition: 0.3s ease;
    margin-left: 4px;

    @media (max-width: 960px) {
      font-size: 24px;
    }

    ${breakpoint(device.phone)} {
      margin-top: 20px;
      margin-left: 0;
      font-size: 18px;
      text-align: center;
      width: 100%;
    }
  }
`;

const Logo = styled.div`
  width: 148px;

  img {
    width: 100%;
    transition: all 0.3s ease;
    transform: scale(1.155);

    &:hover {
      transform: scale(1.2705);
    }
  }
`;

const Header = ({ isNavigationOpen }) => {
  return (
    <StyledHeader className={isNavigationOpen ? "open" : null}>
      <a href="/">
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
      </a>
      <p className="title">Recycling- & Eventdienstleistungen</p>
    </StyledHeader>
  );
};

export default Header;
