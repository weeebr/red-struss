import React from "react";
import { withRouter } from "react-router-dom";

const AngeboteDienstleistungen = ({ match, history }) => {
  const { params } = match;

  const clickTab = id =>
    history.push(match.path.substr(0, match.path.indexOf(":")) + id);

  return (
    <>
      <h1>Angebote & Dienstleistungen</h1>
      <p>
        Aus ökologischen Gründen gelten die Richtpreise der Dienstleistungen für
        Privathaushalte bis auf Weiteres nur für den Raum Basel. Ab einer
        Entfernung von 20 km wird ein Wegzuschlag von CHF 2.50 pro 10 km
        erhoben.
      </p>
    </>
  );
};

export default withRouter(AngeboteDienstleistungen);
