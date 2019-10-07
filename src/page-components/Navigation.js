import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors, pageFullWidth } from "../theme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import OverlayBg from "./OverlayBg";
import Hamburger from "./Hamburger";

// prettier-ignore
const StyledNavigation = styled.aside`
  transition: all 0.3s ease;
  margin-left: 0;
  position: relative;
  margin-right: 20px;

  &.open {
    margin-right: calc(277px + 68px - 20px);
    left: 207px;
  
    nav.mobile {
      position: fixed;
      top: 159px;
      opacity: 1;
      height: 100vh;
      background: black;
      box-shadow: none;
      z-index: 3;

      @media (max-width: 960px) {
        top: 239px;
      }
    }
  }
  
  nav.mobile {
    position: relative;
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: none;
    height: 1px;
    margin-left: -229px;
  } 

  nav {
    display: flex;
    flex-direction: column;
    width: 277px;
    box-shadow: 0 0 14px #e0dfdf;

    a {
      padding: 12px 20px;
      color: white;
      text-decoration: none;
      white-space: nowrap;
      background: black;
      transition: all 0.3s ease, background-color 0.6s ease;

      &.active {
        font-family: OpenSansBold;
        background: ${colors.primaryRed};
      }

      &:not(:first-child) {
        border-top: 1px solid #1f1f1f;
      }

      &:focus,
      &:hover {
        border-bottom: 0;
        background: ${colors.primaryRed};
        padding: 12px 15px 12px 25px;
      }
    }
  }
`;

const Navigation = ({ isOpen, setNavigationOpen }) => {
  const hamburgerVisible = useMediaQuery(`(max-width:${pageFullWidth + 60}px)`);

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
