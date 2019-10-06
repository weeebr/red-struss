import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
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
    </>
  );
};

export default Navigation;
