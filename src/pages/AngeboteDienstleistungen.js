import React from "react";
import { withRouter } from "react-router-dom";

const AngeboteDienstleistungen = ({ match, history }) => {
  const { params } = match;

  const clickTab = id =>
    history.push(match.path.substr(0, match.path.indexOf(":")) + id);

  return (
    <>
      <h1>Angebote & Dienstleistungen</h1>
      <pre>{JSON.stringify(match, null, 2)}</pre>
    </>
  );
};

export default withRouter(AngeboteDienstleistungen);
