import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../theme";

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 20px;
  box-shadow: 0 0 14px #e0dfdf;

  a {
    padding: 15px 20px;
    color: ${colors.primaryRed};
    text-decoration: none;
    white-space: nowrap;
    background: white;
    transition: all 0.3s ease;

    &.active {
      font-weight: bold;
    }

    &:not(:first-child) {
      border-top: 1px solid #efeeee;
    }

    &:focus, &:hover {
      border-bottom: 0;
      background: #efeeee;
      padding: 15px 15px 15px 25px;
    }
  }
`;

const Navigation = () => {
  return (
    <aside>
      <StyledNavigation>
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
      </StyledNavigation>
    </aside>
  );
};

export default Navigation;
