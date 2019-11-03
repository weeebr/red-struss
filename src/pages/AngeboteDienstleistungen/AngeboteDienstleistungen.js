import React from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import TabsComponent from "./TabsComponent";
import styled from "styled-components";

const AngeboteDienstleistungen = () => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();

  const onTabClick = id => {
    const url = location.pathname;
    const isIdSet = () => url.substring(1).includes("/");

    history.push(
      (isIdSet() ? url.substring(0, url.lastIndexOf("/")) : url) + "/" + id
    );
  };

  const IntroductionText = styled.div`
    margin-bottom: 40px;

    li {
      padding: 16px;
      margin-left: 20px;
    }
  `;

  return (
    <>
      <h1>Angebote & Dienstleistungen</h1>
      <IntroductionText>
        <p>
          Unser öffentliches Engagement umfasst im Wesentlichen drei
          Tätigkeitsbereiche:
        </p>
        <ol>
          <li>
            Wo immer wir unterwegs weggeworfenen Dosen oder herumstehenden
            Flaschen begegnen, nehmen wir diese mit und führen Sie dem Recycling
            zu.
          </li>
          <li>
            Wir unterstützen Private und Firmen bei der Sammlung und Entsorgung
            von PET, Aluminium und weiteren Werkstoffen. Dies geschieht durch
            Beratung, Einrichtung entsprechender Sammelvorrichtungen sowie
            Abholungen durch uns oder unsere Partner.
          </li>
          <li>
            Auch Veranstalter können von unseren Dienstleistungen profitieren:
            Wir bieten Recycling- und Abfallkonzepte an und sorgen während der
            Veranstaltung für Sauberkeit und eine zweckmässige Abfalltrennung;
            im Nachgang kümmern wir uns in enger Zusammenarbeit mit unseren
            ausgesuchten Partnern um die recyclinggerechte Entsorgung.
          </li>
        </ol>
      </IntroductionText>

      <TabsComponent onTabClick={onTabClick} current={params.id} />
    </>
  );
};

export default AngeboteDienstleistungen;
