import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors, pageFullWidth } from "../theme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import OverlayBg from "./OverlayBg";
import Hamburger from "./Hamburger";

// prettier-ignore
const StyledNavigation = styled.aside`
  transition: all 0.5s ease;
  margin-left: 0;
  position: relative;
  margin-right: 20px;

  &.open {
    margin-right: calc(277px + 68px - 20px);
    left: 207px;
  
    nav.mobile {
      position: fixed;
      top: 176px;
      opacity: 1;
      height: 100vh;
      background: white;
      box-shadow: none;
      z-index: 11;

      a {
        opacity: 1;
        margin-left: 0;
      }

      @media (max-width: 960px) {
        top: 244px;
      }
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    width: 277px;
    box-shadow: 0 0 14px #e0dfdf;

    a {
      padding: 12px 20px;
      color: black;
      font-family: OpenSans;
      text-decoration: none;
      white-space: nowrap;
      background: white;
      transition: all 0.5s ease, background 0.1s ease;
      border-bottom: 1px solid #d0d0d0;

      &.active {
        font-family: OpenSansBold;
        background: ${colors.primaryRed};
        color: white;
      }


      &:focus,
      &:hover {
        color: white;
        border-bottom: 1px solid ${colors.primaryRed};
        background: ${colors.primaryRed};
        padding: 12px 15px 12px 25px;
      }
    }

    &.mobile {
      position: relative;
      opacity: 0;
      transition: all 0.5s ease;
      box-shadow: none;
      height: 1px;
      margin-left: -229px;

      a {
        opacity: 0;
        margin-left: -100px;
        transition: all 0.5s ease;
        /*
        &:nth-child(1) { transition-delay: 0.10s }
        &:nth-child(2) { transition-delay: 0.15s }
        &:nth-child(3) { transition-delay: 0.20s }
        &:nth-child(4) { transition-delay: 0.25s }
        &:nth-child(5) { transition-delay: 0.30s }
        &:nth-child(6) { transition-delay: 0.35s }
        &:nth-child(7) { transition-delay: 0.40s }
        &:nth-child(8) { transition-delay: 0.45s }*/
      }
    } 
  }
`;

const Navigation = ({ isOpen, setNavigationOpen }) => {
  const hamburgerVisible = useMediaQuery(
    `(max-width:${pageFullWidth + 130}px)`
  );

  return (
    <StyledNavigation className={isOpen ? "open" : null} isOpen={isOpen}>
      <div
        onClick={() => (hamburgerVisible ? setNavigationOpen(!isOpen) : null)}
      >
        {hamburgerVisible && (
          <Hamburger isOpen={isOpen} onClick={setNavigationOpen} />
        )}

        {isOpen && <OverlayBg />}

        <nav
          className={`${hamburgerVisible ? "mobile" : ""} ${
            isOpen ? "open" : ""
          }`}
        >
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/leitbild">Leitbild & Philosophie</NavLink>
          <NavLink to="/angebote">Angebote & Dienstleistungen</NavLink>
          <NavLink to="/referenzen">Referenzen & Partner</NavLink>
          <NavLink to="/team">Unser Team</NavLink>
          <NavLink to="/aktuell">Aktuell</NavLink>
          <NavLink to="/wissenswertes">Wissenswertes</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </nav>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
