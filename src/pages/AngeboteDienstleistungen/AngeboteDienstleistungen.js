import React from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import TabsComponent from "./TabsComponent";

const AngeboteDienstleistungen = () => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();

  const onTabClick = id =>
    history.push(
      location.pathname.substring(0, location.pathname.lastIndexOf("/") + 1) +
        id
    );

  return (
    <>
      <h1>Angebote & Dienstleistungen</h1>
      <TabsComponent onTabClick={onTabClick} current={params.id} />
    </>
  );
};

export default AngeboteDienstleistungen;
