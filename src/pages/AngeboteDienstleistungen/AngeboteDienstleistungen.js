import React from "react";
import { withRouter } from "react-router-dom";
import TabsComponent from "./TabsComponent";

const AngeboteDienstleistungen = ({ match, history }) => {
  const { params } = match;

  const onTabClick = id =>
    history.push(match.path.substr(0, match.path.indexOf(":")) + id);

  return (
    <>
      <h1>Angebote & Dienstleistungen</h1>
      <TabsComponent onTabClick={onTabClick} current={params.id} />
    </>
  );
};

export default withRouter(AngeboteDienstleistungen);
