import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../theme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import OverlayBg from "./OverlayBg";
import Hamburger from "./Hamburger";

// prettier-ignore
const StyledNavigation = styled.aside`
  transition: all 0.3s ease;
  margin-left: -207px;
  position: relative;
  height: 1px;

  &.open {
    width: 345px;
    margin-left: 0;

    nav.mobile {
      position: fixed;
      top: 159px;
      opacity: 1;
      margin-right: 68px;
      height: 100vh;
      z-index: 3;
    }
  }
  
  nav.mobile {
    position: relative;
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: none;
    background: black;
   
  }

  nav {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 80px;
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
  const hamburgerVisible = useMediaQuery("(max-width:1066px)");

  return (
    <StyledNavigation className={isOpen ? "open" : null} isOpen={isOpen}>
      <div onClick={() => setNavigationOpen(!isOpen)}>
        {hamburgerVisible && (
          <Hamburger isOpen={isOpen} onClick={setNavigationOpen} />
        )}

        {isOpen && <OverlayBg />}

        <nav className={hamburgerVisible ? "mobile" : null}>
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
